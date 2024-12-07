import React, { useRef, useState } from "react";
import {useGSAP} from "@gsap/react"
import gsap from "gsap";
import 'remixicon/fonts/remixicon.css'
import LoacationSearchPanel from "../components/LoacationSearchPanel";
import VechilePanel from "../components/VechilePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";
const Home = () => {

  const [pickup, setPickup]= useState('');
  const [destination , setDestination]= useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const [vechilePanelOpen, setVechilePanelOpen]=useState(false);
  const [confirmRidePanelOpen, setconfirmRidePanelOpen]=useState(false);
  const [lookingfordriverPanelOpen , setLookingForPanelOpen] = useState(false)
  const [waitingforDriverPanelOpen , setWaitingforDriverPanelOpen] = useState(false)

  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vechielPanelRef = useRef(null)
  const confirmedPanelRideRef = useRef(null);
  const lookingforDriverRef = useRef(null)
  const waitingForDriverRef = useRef(null)

  const submitHandler = (e) => {
    e.preventDefault()
  };

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        padding: '24px',
        duration: 0.3,
        ease: 'power1.out',
      });
      gsap.to(panelCloseRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: 'power1.out',
      });
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        padding: '0px',
        duration: 0.3,
        ease: 'power1.out',
      });
      gsap.to(panelCloseRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: 'power1.out',
      });
    }
  }, [panelOpen]);
  
  useGSAP(() => {
    if (vechilePanelOpen) {
      gsap.to(vechielPanelRef.current, {
        transform: 'translateY(0)',
        duration: 0.3,
        ease: 'power1.out',
      });
    } else {
      gsap.to(vechielPanelRef.current, {
        transform: 'translateY(100%)',
        duration: 0.3,
        ease: 'power1.out',
      });
    }
  }, [vechilePanelOpen]);
  
  useGSAP(() => {
    if (confirmRidePanelOpen) {
      gsap.to(confirmedPanelRideRef.current, {
        transform: 'translateY(0)',
        duration: 0.3,
        ease: 'power1.out',
      });
    } else {
      gsap.to(confirmedPanelRideRef.current, {
        transform: 'translateY(100%)',
        duration: 0.3,
        ease: 'power1.out',
      });
    }
  }, [confirmRidePanelOpen]);

  useGSAP(() => {
    if (lookingfordriverPanelOpen) {
      gsap.to(lookingforDriverRef.current, {
        transform: 'translateY(0)',
        duration: 0.3,
        ease: 'power1.out',
      });
    } else {
      gsap.to(lookingforDriverRef.current, {
        transform: 'translateY(100%)',
        duration: 0.3,
        ease: 'power1.out',
      });
    }
  }, [lookingfordriverPanelOpen]);

  useGSAP(() => {
    if (waitingforDriverPanelOpen) {
      gsap.to(waitingForDriverRef.current, {
        transform: 'translateY(0)',
        duration: 0.3,
        ease: 'power1.out',
      });
    } else {
      gsap.to(waitingForDriverRef.current, {
        transform: 'translateY(100%)',
        duration: 0.3,
        ease: 'power1.out',
      });
    }
  }, [waitingforDriverPanelOpen]);
  

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />
      <div className="h-screen w-screen">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className=" flex flex-col justify-end h-screen absolute  top-0   w-full ">
        <div className="h-[30%] p-5 bg-white relative">
        <h5 ref={panelCloseRef} onClick={()=>{
          setPanelOpen(false)
        }} className="absolute right-6 top-6 text-2xl opacity-0">
        <i className="ri-arrow-down-wide-line"></i>
        </h5>
  
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
          <div className="line absolute h-16 w-1 top-[50%] -translate-y-1/2 left-10 bg-gray-700 rounded-full"></div>
            <input
            onClick={()=>{
              setPanelOpen(true)
            }}
            value={pickup}
            onChange={(e)=>{setPickup(e.target.value)}}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full"
              type="text"
              placeholder="Add a pick-up location"
            />
            <input
            onClick={()=>{
              setPanelOpen(true)
            }}
            value={destination}
            onChange={(e)=>{setDestination(e.target.value)}}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full  mt-3"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>

        <div ref={panelRef} className=" bg-white h-0">
           <LoacationSearchPanel  setPanelOpen={setPanelOpen} setVechilePanelOpen={setVechilePanelOpen} />
        </div>
      </div>
      <div ref={vechielPanelRef} className="fixed w-full z-10 bottom-0 bg-white  px-3 py-6 translate-y-full">
         <VechilePanel setconfirmRidePanelOpen={setconfirmRidePanelOpen} setVechilePanelOpen={setVechilePanelOpen} />
        </div>
      <div ref={confirmedPanelRideRef} className="fixed w-full z-10 bottom-0 bg-white  px-3 py-6 translate-y-full">
           <ConfirmRide setconfirmRidePanelOpen={setconfirmRidePanelOpen} setLookingForPanelOpen={setLookingForPanelOpen} />
        </div>
        
      <div ref={lookingforDriverRef} className="fixed w-full z-10 bottom-0 bg-white  px-3 py-6 translate-y-full">
          <LookingForDriver setLookingForPanelOpen={setLookingForPanelOpen} />
        </div>

      <div ref={waitingForDriverRef}  className="fixed w-full z-10 bottom-0 bg-white  px-3 py-6 ">
          <WaitingForDriver waitingforDriverPanelOpen={waitingforDriverPanelOpen} setLookingForPanelOpen={setLookingForPanelOpen} />
        </div>
        
   
    </div>
  );
};

export default Home;

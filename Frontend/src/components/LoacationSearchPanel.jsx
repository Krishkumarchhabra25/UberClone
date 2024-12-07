import React from 'react';

const LoacationSearchPanel = ({ setPanelOpen, setVechilePanelOpen }) => {
    const locations = [
        '24, near Sai temple, Tanka Pani road, BBSR',
        '22, near Badgad temple, Tanka Pani road, BBSR',
        '21, near Dalma temple, Tanka Pani road, BBSR',
        '20, near Patia temple, Tanka Pani road, BBSR',
    ];

    return (
        <>
            {locations.map((elem, index) => (
                <div
                    key={index} 
                    onClick={() => {
                      
                        setVechilePanelOpen(true);
                        setPanelOpen(false);
                    }}
                    className="flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start"
                >
                    <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
                        <i className="ri-map-pin-fill"></i>
                    </h2>
                    <h4 className="font-medium">{elem}</h4>
                </div>
            ))}
        </>
    );
};

export default LoacationSearchPanel;

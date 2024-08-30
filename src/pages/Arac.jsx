import axios from "axios";
import React, { useEffect, useState } from "react";

const Arac = () => {
  const [charge, setCharge] = useState(null);
  const [batteryLevel, setBatteryLevel] = useState(null);
  const [barrier, setBarrier] = useState(null);
  const [load, setLoad] = useState(null);
  const [loadLevel, setLoadLevel] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://192.168.0.150:8080/api/mobile/state"
        );

        const { charge, batteryLevel, barrier, load, loadLevel } =
          response.data;

        setCharge(charge);
        setBatteryLevel(batteryLevel);
        setBarrier(barrier);
        setLoad(load);
        setLoadLevel(loadLevel);
      } catch (err) {
        console.log("Arac bilgisi cekilirken hata olustu.");
      }
    };

    fetchData();

    const intervalId = setInterval(fetchData, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="md:mt-[-20px] mt-[-200px]">
        <div className="w-full min-h-screen flex justify-center items-center gap-2 md:gap-7">
          <div className="dark:bg-[#31344B] w-[50px] h-[50px] md:w-[180px] md:h-[180px] rounded-sm dark:rounded-sm md:rounded-xl stateLite dark:stateDark">
            <p className="font-bold text-[9px] md:text-[14px] text-center mt-2 md:mt-10 text-[#232c27] dark:text-[#E3EDF7]">
              Charge
            </p>
            {charge ? (
              <p className="text-green-500 text-[20px] md:text-[75px] text-center">
                <ion-icon name="battery-charging-outline"></ion-icon>
              </p>
            ) : (
              <p className="text-[#011627] text-[20px] md:text-[75px] text-center">
                <ion-icon name="battery-half-outline"></ion-icon>
              </p>
            )}
          </div>

          <div className="dark:bg-[#31344B] w-[50px] h-[50px] md:w-[180px] md:h-[180px] rounded-sm dark:rounded-sm md:rounded-xl relative flex-col stateLite dark:stateDark">
            <p className="font-bold text-[9px] md:text-[14px] text-[#232c27] mt-1 text-center md:mt-10 dark:text-[#E3EDF7]">
              Battery Level
            </p>
            <div className="absolute flex flex-col items-center text-[#232c27] dark:text-[#0c1927] text-center">
              <p className="md:text-[80px] mt-[-5px] md:mt-0 text-[20px] px-4 md:px-14">
                <ion-icon name="battery-dead-outline"></ion-icon>
              </p>
            </div>

            {batteryLevel > 20 && (
              <p className="md:text-[20px] mt-[+4px] text-[5px] font-bold text-center md:mt-8 text-green-900 dark:text-green-500">
                %{batteryLevel}
              </p>
            )}
            {batteryLevel < 20 && (
              <p className="md:text-[20px] mt-[+4px] text-[5px] font-bold text-center md:mt-8 text-red-800">
                %{batteryLevel}
              </p>
            )}
          </div>

          <div className="dark:bg-[#31344B] w-[50px] h-[50px] md:w-[180px] md:h-[180px] rounded-sm dark:rounded-sm md:rounded-xl stateLite dark:stateDark">
            <p className="font-bold text-[9px] md:text-[14px] text-[#232c27] text-center mt-2 md:mt-10 dark:text-[#E3EDF7]">
              Barrier
            </p>
            {barrier ? (
              <p className="md:text-[65px] text-[20px] px-[15px] md:px-14 text-red-800">
                <ion-icon name="warning-outline"></ion-icon>
              </p>
            ) : (
              <p className="md:text-[65px] text-[20px] px-[15px] md:px-14 text-[#0C1927]">
                <ion-icon name="triangle-outline"></ion-icon>
              </p>
            )}
          </div>

          <div className="dark:bg-[#31344B] w-[50px] h-[50px] md:w-[180px] md:h-[180px] rounded-sm dark:rounded-sm md:rounded-xl stateLite dark:stateDark">
            <p className="font-bold text-[9px] md:text-[14px] text-[#232c27] text-center mt-2 md:mt-10 dark:text-[#E3EDF7]">
              Load
            </p>
            {load ? (
              <p className="md:text-[65px] text-[20px] md:mt-1 md:px-14 px-[15px] dark:text-[#0C1927]">
                <ion-icon name="radio-button-on-outline"></ion-icon>
              </p>
            ) : (
              <p className="md:text-[65px] text-[20px] px-[15px] md:mt-1 md:px-14 dark:text-[#0C1927]">
                <ion-icon name="radio-button-off-outline"></ion-icon>
              </p>
            )}
          </div>

          <div className="dark:bg-[#31344B] w-[50px] h-[50px] md:w-[180px] md:h-[180px] rounded-sm dark:rounded-sm md:rounded-xl relative flex-col stateLite dark:stateDark">
            <p className="font-bold text-[9px] md:text-[14px] text-[#232c27] text-center mt-2 md:mt-10 dark:text-[#E3EDF7]">
              Load Level
            </p>
            <div className="absolute flex flex-col items-center text-[#232c27] dark:text-[#112133] text-center">
              <p className="md:text-[75px] text-[20px] px-[15px] md:px-[52px]">
                <ion-icon name="tablet-landscape-outline"></ion-icon>
              </p>
            </div>

            {loadLevel > 75 && (
              <p className="md:text-[16px] text-[5px] mt-[+8px] font-bold text-center md:mt-8 text-red-800">
                {loadLevel}KG
              </p>
            )}
            {loadLevel < 75 && (
              <p className="text-[5px] md:text-[16px] mt-[+8px] font-bold text-center md:mt-8 text-green-500">
                {loadLevel}KG
              </p>
            )}
          </div>
        </div>

        {/*<div className="flex justify-center">
          <div className="dark:bg-[#31344B] w-[250px] h-[200px] md:w-[600px] md:h-[400px] flex justify-center items-center mt-[-270px] md:mt-[-250px] rounded-sm dark:rounded-sm md:rounded-xl stateLite dark:stateDark">
            <iframe
              className="w-[230px] h-[180px] md:w-[580px] md:h-[380px]"
              src="https://www.youtube.com/embed/KDV_-rXGy7A?si=1AApb93UXv8r6nfi"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>*/}
      </div>
    </>
  );
};

export default Arac;

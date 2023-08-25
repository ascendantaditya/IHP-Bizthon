import { useCallback } from "react";

const PatientProfile = () => {
  const onVectorIconClick = useCallback(() => {
    // Please sync "QR" to the project
  }, []);

  const onXRayClick = useCallback(() => {
    // Please sync "Patient Profile" to the project
  }, []);

  const onRectangleButtonClick = useCallback(() => {
    // Please sync "Patient Profile" to the project
  }, []);

  return (
    <div className="relative [background:linear-gradient(112.36deg,_#2da0f6,_#0042ab)] w-full h-[982px] overflow-hidden text-left text-21xl text-dimgray-200 font-roboto">
      <img
        className="absolute h-[4.84%] w-[3.14%] top-[6.64%] right-[91.02%] bottom-[88.51%] left-[5.84%] max-w-full overflow-hidden max-h-full cursor-pointer"
        alt=""
        src="/vector.svg"
        onClick={onVectorIconClick}
      />
      <div className="absolute h-[78%] w-[68.58%] top-[14.05%] right-[14.95%] bottom-[7.94%] left-[16.47%]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[40px] bg-gray shadow-[6px_6px_8px_5px_#0143ac]" />
        <div className="absolute top-[52.87%] left-[13.31%]">1</div>
        <div className="absolute top-[64.36%] left-[13.31%]">2</div>
        <div className="absolute top-[75.85%] left-[13.31%]">3</div>
        <div className="absolute top-[87.34%] left-[13.31%]">4</div>
        <div className="absolute h-[20.23%] w-[14.95%] top-[6.53%] right-[81.97%] bottom-[73.24%] left-[3.09%] rounded-[50%] bg-royalblue" />
        <img
          className="absolute h-[18.02%] w-[13.31%] top-[7.7%] right-[82.74%] bottom-[74.28%] left-[3.95%] rounded-[50%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/ellipse-46@2x.png"
        />
        <div className="absolute top-[7.7%] left-[21.5%] text-[64px] font-semibold text-black">{`Soham Ghugare `}</div>
        <div className="absolute top-[17.89%] left-[21.5%] text-[36px] font-semibold text-dimgray-100">
          IHP ID - 2456 1222 1896
        </div>
        <div className="absolute h-[66.45%] w-[91.71%] top-[30.42%] right-[4.34%] bottom-[3.13%] left-[3.95%] bg-gainsboro box-border border-[3px] border-solid border-white" />
        <div className="absolute h-[66.32%] w-[0.1%] top-[30.61%] right-[73.72%] bottom-[3.07%] left-[26.18%] box-border border-r-[1px] border-solid border-white" />
        <div className="absolute h-[66.32%] w-[0.1%] top-[30.35%] right-[37.56%] bottom-[3.33%] left-[62.34%] box-border border-r-[1px] border-solid border-white" />
        <div className="absolute h-[0.13%] w-[91.71%] top-[49.93%] right-[4%] bottom-[49.93%] left-[4.29%] box-border border-t-[1px] border-solid border-white" />
        <div className="absolute h-[0.13%] w-[91.71%] top-[61.95%] right-[4%] bottom-[37.92%] left-[4.29%] box-border border-t-[1px] border-solid border-white" />
        <div className="absolute h-[0.13%] w-[91.71%] top-[72.91%] right-[4.39%] bottom-[26.96%] left-[3.91%] box-border border-t-[1px] border-solid border-white" />
        <div className="absolute h-[0.13%] w-[91.71%] top-[84.92%] right-[4.39%] bottom-[14.95%] left-[3.91%] box-border border-t-[1px] border-solid border-white" />
        <b className="absolute top-[39.82%] left-[13.79%] text-[30px] text-black">{` `}</b>
        <b className="absolute top-[33.81%] left-[8.49%] text-black">
          <p className="m-0">Report</p>
          <p className="m-0">Number</p>
        </b>
        <b className="absolute top-[36.81%] left-[40.12%] text-black">Type</b>
        <b className="absolute top-[37.34%] left-[74.83%] text-black">Title</b>
        <a
          className="[text-decoration:none] absolute top-[52.87%] left-[39.54%] text-[inherit] cursor-pointer"
          href="https://aurax.innpm "
          onClick={onXRayClick}
        >
          X-Ray
        </a>
        <div className="absolute top-[52.87%] left-[67.41%]">Limb Fracture</div>
        <div className="absolute top-[64.36%] left-[71.26%]">Diabetes</div>
        <div className="absolute top-[75.85%] left-[68.56%]">Lung Cancer</div>
        <div className="absolute w-[33.08%] top-[87.6%] left-[64.03%] text-[37px] inline-block">
          Frontend Lobe
        </div>
        <a
          className="[text-decoration:none] absolute top-[64.36%] left-[33.27%] text-[inherit]"
          href="https://aurax.in"
        >
          Blood Report
        </a>
        <a
          className="[text-decoration:none] absolute top-[75.85%] left-[38.48%] text-[inherit]"
          href="https://aurax.in"
        >
          CT Scan
        </a>
        <a
          className="[text-decoration:none] absolute top-[87.34%] left-[36.35%] text-[inherit]"
          href="https://aurax.in"
        >
          MRI Report
        </a>
        <button
          className="cursor-pointer [border:none] p-0 bg-cornflowerblue absolute h-[13.05%] w-[24.3%] top-[9.14%] right-[4.44%] bottom-[77.81%] left-[71.26%] rounded-[30px] shadow-[0px_8px_9px_rgba(0,_0,_0,_0.25)]"
          onClick={onRectangleButtonClick}
        />
        <div className="absolute top-[12.27%] left-[77.34%] leading-[131.69%] font-semibold text-white">
           <b>Upload</b>
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;

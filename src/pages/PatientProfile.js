import { useCallback } from "react";

const PatientProfile = () => {
  const onVectorIconClick = useCallback(() => {
    // Please sync "Patient Profile" to the project
  }, []);

  return (
    <div className="relative [background:linear-gradient(112.36deg,_#2da0f6,_#0042ab)] w-full h-[982px] overflow-hidden text-left text-5xl text-black font-roboto">
      <img
        className="absolute h-[4.84%] w-[3.14%] top-[6.64%] right-[91.02%] bottom-[88.51%] left-[5.84%] max-w-full overflow-hidden max-h-full cursor-pointer"
        alt=""
        src="/vector.svg"
        onClick={onVectorIconClick}
      />
      <div className="absolute h-[89%] w-[68.58%] top-[5.8%] right-[14.95%] bottom-[5.19%] left-[16.47%]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[40px] bg-gray shadow-[6px_6px_8px_5px_#0143ac]" />
        <div className="absolute h-[17.73%] w-[14.95%] top-[4.92%] right-[81.1%] bottom-[77.35%] left-[3.95%] rounded-[50%] bg-royalblue" />
        <img
          className="absolute h-[15.79%] w-[13.31%] top-[5.95%] right-[81.87%] bottom-[78.26%] left-[4.82%] rounded-[50%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/ellipse-46@2x.png"
        />
        <div className="absolute top-[5.95%] left-[22.37%] text-[64px] font-semibold">{`Soham Ghugare `}</div>
        <div className="absolute top-[14.87%] left-[22.37%] text-[36px] font-semibold text-dimgray-200">
          IHP ID - 2456 1222 1896
        </div>
        <div className="absolute h-[68.42%] w-[91.71%] top-[25.74%] right-[4.34%] bottom-[5.84%] left-[3.95%] rounded-[30px] bg-gainsboro box-border border-[3px] border-solid border-white" />
        <b className="absolute top-[55.95%] left-[13.69%] text-[30px]">{` `}</b>
        <div className="absolute w-[87.17%] top-[38.9%] left-[6.36%] inline-block">
          <span className="leading-[131.69%]">
            <span className="text-18xl">
              <span className="font-semibold font-roboto">Description</span>
            </span>
            <span>
              <span className="text-18xl">{` - `}</span>
              <span>
                The heart size appears within normal limits. Lung fields show
                normal expansion and no evidence of focal consolidation. Mild
                bronchovascular markings are observed bilaterally.
              </span>
            </span>
          </span>
        </div>
        <div className="absolute w-[87.17%] top-[81.69%] left-[6.17%] inline-block">
          <span className="leading-[131.69%]">
            <span className="text-18xl">
              <span className="font-semibold font-roboto">Impressions</span>
            </span>
            <span>
              <span className="text-18xl">{` - `}</span>
              <span>{`X-ray findings indicate a normal chest radiograph. No acute abnormalities or significant pathology identified. `}</span>
            </span>
          </span>
        </div>
        <img
          className="absolute h-[26.24%] w-[30.09%] top-[54.12%] right-[63.55%] bottom-[19.64%] left-[6.36%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/image-1@2x.png"
        />
        <img
          className="absolute h-[26.2%] w-[31.44%] top-[54.12%] right-[29.8%] bottom-[19.68%] left-[38.77%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/image-2@2x.png"
        />
        <div className="absolute top-[28.72%] left-[6.36%] text-18xl leading-[131.69%]">
          <span>
            <b>Title</b>
            <span className="font-semibold font-roboto">{` : `}</span>
            <span className="font-roboto">X-Ray</span>
            <span className="font-semibold font-roboto">{`  -  `}</span>
          </span>
          <span className="text-dimgray-100">Limb Fracture</span>
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;

import { useCallback } from "react";

const PatientProfile = () => {
  const onUploadContainerClick = useCallback(() => {
    // Please sync "Patient Profile" to the project
  }, []);

  return (
    <div className="relative [background:linear-gradient(112.36deg,_#2da0f6,_#0042ab)] w-full h-[982px] overflow-hidden text-left text-[34.82px] text-black font-roboto">
      <img
        className="absolute h-[4.84%] w-[3.14%] top-[6.64%] right-[91.02%] bottom-[88.51%] left-[5.84%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector.svg"
      />
      <div className="absolute h-[89%] w-[43.25%] top-[6.52%] right-[28.37%] bottom-[4.48%] left-[28.37%]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[40px] bg-gray shadow-[6px_6px_8px_5px_#0143ac]" />
        <b className="absolute top-[3.66%] left-[7.19%]">IHP ID</b>
        <div className="absolute top-[4.12%] left-[30.43%] text-9xl text-dimgray">
          6941 3456 8762
        </div>
        <div className="absolute top-[11.63%] left-[30.48%] text-9xl text-dimgray">
          Mr. Sushant Saurav
        </div>
        <div className="absolute top-[80.55%] left-[30.43%] text-9xl text-dimgray">
          Dr. Soham Ghugare
        </div>
        <b className="absolute top-[10.93%] left-[7.19%]">Name</b>
        <b className="absolute top-[18.2%] left-[7.19%]">Title</b>
        <b className="absolute top-[25.47%] left-[7.19%]">Description</b>
        <b className="absolute top-[51.97%] left-[7.19%]">Attachments</b>
        <b className="absolute top-[79.86%] left-[7.19%]">Doctor</b>
        <input
          className="[border:none] bg-cornflowerblue-200 absolute h-[4.35%] w-[57.19%] top-[18.42%] right-[12.39%] bottom-[77.23%] left-[30.43%] rounded-[13.06px]"
          type="text"
        />
        <input
          className="[border:none] bg-cornflowerblue-200 absolute h-[17.28%] w-[80.43%] top-[31.35%] right-[12.39%] bottom-[51.37%] left-[7.19%] rounded-[13.06px]"
          type="text"
        />
        <input
          className="absolute h-[17.28%] w-[52.29%] top-[59.27%] right-[40.52%] bottom-[23.46%] left-[7.19%] rounded-[13.06px] bg-cornflowerblue-200"
          type="file"
          required
        />
        <div
          className="absolute h-[8.17%] w-[27.52%] top-[88.33%] right-[36.24%] bottom-[3.5%] left-[36.24%] cursor-pointer"
          onClick={onUploadContainerClick}
        >
          <button className="cursor-pointer [border:none] p-0 bg-cornflowerblue-100 absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[21.43px] shadow-[0px_5.714285850524902px_6.43px_rgba(0,_0,_0,_0.25)]" />
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[23.8%] left-[25%] text-9xl leading-[131.69%] font-semibold font-roboto text-white text-left inline-block">
            Upload
          </button>
        </div>
        <img
          className="absolute h-[5.43%] w-[5.81%] top-[65.22%] right-[63.76%] bottom-[29.35%] left-[30.43%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector1.svg"
        />
      </div>
    </div>
  );
};

export default PatientProfile;

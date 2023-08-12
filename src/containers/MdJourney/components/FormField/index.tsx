interface IProp {
  labelName: string;
  placehodler: string;
}

const FormField = ({ labelName, placehodler }: IProp) => {
  return (
    <>
      <div className="flex items-center gap-2 mb-2">
        <label
          className="block text-lg font-medium text-gray-900"
        >
          {labelName}
        </label>
        <button
          type="button"
          className="font-semibold text-lg bg-[#EcECF1] py-1 px-2 rounded-[5px] text-black"
        >随机生成</button>
      </div>
      <input 
        type="text" 
        className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block w-2/3 p-3"
        placeholder={placehodler}
        required
      />
    </>    
  )
}

export default FormField;

const PartnerCard = ({name,number,imageUrl}) => (

    <div className="md:flex bg-gray-100 rounded-lg p-6 shadow-md md:mr-4">
     <img className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6" src={imageUrl}/>
        <div className="text-center md:text-left">
         <h2 className="text-lg">{name}</h2>
          <div className="text-indigo-500">Partner</div>
         <div className="text-gray-600">{number}</div>
        </div>
       </div>
    
)

export default PartnerCard;
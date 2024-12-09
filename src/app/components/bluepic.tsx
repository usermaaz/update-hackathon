import Image from "next/image";
import  bluepic from '../../../public/images/Frame (9).png'
export default function Bluepic() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
      <Image
        src={bluepic}  
        alt="bluepic"
        width={1344}  
        height={977} 
        style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
      />
      <br />
    </div>
  );
}

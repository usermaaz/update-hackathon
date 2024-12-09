import Image from "next/image";
import fourpic from '../../../public/images/Frame (8).png'
export default function Fourmanpic() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
      <Image
        src={fourpic}  
        alt="fourpic"
        width={1440}  
        height={5442} 
        style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
      />
    </div>
  );
}

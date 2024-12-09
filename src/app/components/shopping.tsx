
import Image from "next/image";
import  shoppingbag from '../../../public/images/Frame (10).png'
import  titlehome from '../../../public/images/Frame (16).png'
import footerhome from '../../../public/images/Frame (17).png'
export default function Shoppingbag() {
  return (
  <div>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
      <Image
        src={shoppingbag}  // Corrected path (without the curly braces)
        alt="shoppingbag"
        width={1344}  // Adjust width as needed
        height={977} // Adjust height as needed
        style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}/>
      <br />
      <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
      <Image
        src={titlehome}  // Corrected path (without the curly braces)
        alt="titlehome"
        width={1100}  // Adjust width as needed
        height={600} // Adjust height as needed
        />
        <div>
        <Image
        src={footerhome}  // Corrected path (without the curly braces)
        alt="footerhome"
        width={1340}  // Adjust width as needed
        height={970} // Adjust height as needed
        />  
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

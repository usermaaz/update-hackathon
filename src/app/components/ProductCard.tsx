import Image from 'next/image';
import threeboot from "../../../public/images/Frame (6).png"
 export default function  YourComponent () {
  return (
    <div>
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Image Display</h1>
      <Image
        src={threeboot}  // Path to your image in the 'public' folder
        alt="threeboots"
        width={1440}  // Adjust the width as needed
        height={604} // Adjust the height as needed
        priority      // Load the image early if it's critical to the page
      />
    </div>
    </div>
  );
};


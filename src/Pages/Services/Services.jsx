import consultant from '../../assets/skills/Consultant.jpg'
import uiDesign from '../../assets/skills/ui.jpeg'
import dev1 from '../../assets/skills/development.jpg'
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div>
      <div>
        <h1 className="text-left md:text-3xl text-2xl font-semibold mt-6">
          welcome to Services page
        </h1>
        <h3 className="text-left text-lg">
          Explore a wide range of solutions tailored to meet your needs and goals.
        </h3>
      </div>
      <div className='space-y-6 md:py-14 '>
        <div className="text-left md:flex gap-4 items-center border border-gray-500 p-4 rounded-lg">
            <div className='md:w-2/6'>
                <img className='w-full h-64 rounded-lg' src={dev1} alt="" />
            </div>
            <div className='py-4 space-y-4 text-justify md:w-5/6'>
                <h1 className='text-2xl font-bold '>Web Development</h1>
                <p>
                    Web development is the process of creating, building, and maintaining websites and web applications. It involves everything from web design to programming and database management. Web development is generally divided into three core areas: Frontend Development, Backend Development, and Full Stack Development.
                </p>

                <Link to={'/contact'}>
                <button className="bg-blue-700 mt-4 px-10 py-2 rounded text-white flex items-center gap-2 cursor-pointer">Contact</button>
                </Link>

            </div>
        </div>
        <div className="text-left md:flex gap-4 items-center border border-gray-500 p-4 rounded-lg">
            <div className='md:w-2/6 '>
                <img className='w-full h-64 rounded-lg' src={consultant} alt="" />
            </div>
            <div className='py-4 space-y-4 text-justify md:w-5/6'>
                <h1 className='text-2xl font-bold '>Web Consultant</h1>
                <p>
                    UI/UX design refers to the processes of User Interface (UI) and User Experience (UX) design, which are crucial for creating user-friendly and engaging digital products. UI design focuses on the visual elements and interactivity of a product, while UX design encompasses the overall experience a user has while interacting with it. Essentially, UI is how something looks and feels, and UX is how easy and enjoyable it is to use
                </p>

                <Link to={'/contact'}>
                <button className="bg-blue-700 mt-4 px-10 py-2 rounded text-white flex items-center gap-2 cursor-pointer">Contact</button>
                </Link>

            </div>
        </div>
        <div className="text-left md:flex gap-4 items-center border border-gray-500 p-4 rounded-lg">
            <div className='md:w-2/6'>
                <img className=' w-full h-64 rounded-lg' src={uiDesign} alt="" />
            </div>
            <div className='py-4 space-y-4 text-justify md:w-5/6'>
                <h1 className='text-2xl font-bold '>UI/UX Design</h1>
                <p>
                    A web consultant is a technical professional who works with clients to promote the success of their business through web development and design. These consultants provide practical suggestions for improving the online presence of their clients and their businesses. They might work as a freelancer or for a web consulting firm, but it's typical for these professionals to only work with clients during a project.
                </p>

                <Link to={'/contact'}>
                <button className="bg-blue-700 mt-4 px-10 py-2 rounded text-white flex items-center gap-2 cursor-pointer">Contact</button>
                </Link>

            </div>
        </div>
        
      </div>
    </div>
  );
};

export default Services;
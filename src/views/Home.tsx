import ProjectsLayout from "../component/projectsLayout";
import { BGDark, } from "../utils/colors";
import { MantineProvider } from '@mantine/core';
function Home(){
   
    return (
        <MantineProvider theme={{ colorScheme: 'dark' }}>
       <div className="w-screen h-screen dark ">
            <div className={"w-screen h-screen  " + BGDark} >
                <ProjectsLayout></ProjectsLayout>
                
            </div>
       </div>
       </MantineProvider>
    );
}

export default Home
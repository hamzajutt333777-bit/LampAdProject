
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

const P5Home = () => {
    const mainRef = useRef(null);
    const logoRef = useRef(null);
    const endRef = useRef(null)
    const centerLogoText = useRef(null);
    const paraRef = useRef(null);
    const heroImgRef = useRef(null);
    const lamp1Ref = useRef(null);
    const lamp1bgRef = useRef(null);
    const lamp2Ref = useRef(null);
    const lamp3Ref = useRef(null);
    const page1Ref = useRef(null);
    const page2Ref = useRef(null);
    const slidingDivRef = useRef(null);
    const thanksRef = useRef(null);
    const lastArrowRef = useRef(null)
    const logoArr=['a', 'e', 't', 'h', 'e', 'r', 'a']

    useGSAP(() => {
    const tl1 = gsap.timeline();
    

    
    gsap.set(logoRef.current, { 
        xPercent: -50, 
        yPercent: -50, 
        transformOrigin: 'center center' 
    });

    
    tl1.fromTo(logoRef.current, 
        { clipPath: 'inset(0 100% 0 0)' }, 
        { 
            clipPath: 'inset(0 0% 0 0)', 
            duration: 2, 
            ease: 'power2.inOut' 
        }
    ); 

    
    tl1.to(logoRef.current, {
        scale: 0.3,
        x: -550,
        y: -250,
        duration: 1.5,
        ease: 'power3.inOut'
    });
    tl1.from(centerLogoText.current, {
        y:-350,
        duration:1,
        ease: 'power3.out'
    },'a')
    tl1.from(paraRef.current, {
        x:-350,
        duration:1,
        ease: 'power3.out'
    },'a')
    tl1.to(heroImgRef.current, {
        scale:1,
        duration:1,
        ease: 'power3.out'
    }, 'a')
    tl1.from(lamp1Ref.current, {
        y:500,
        duration:1,
        ease:'power3.inOut'
    })
    tl1.to(heroImgRef.current, {
        y:-650,
        duration:1,
        ease:'power3.in'
    },'b')
    tl1.to(centerLogoText.current, {
        y:-500,
        delay:0.3,
        duration:1,
        ease:'power3.in'
    },'b')
    tl1.to(paraRef.current, {
        y:-700,
        delay:0.3,
        duration:1,
        ease:'power3.in'
    },'b')
    tl1.to(lamp1Ref.current, {
        scale:0.22,
        marginRight:'20vw',
        paddingBottom:0,
        paddingTop:'53.5vw',
        y:-600,
        delay:0.3,
        duration:1.5
    },'b')
    tl1.to('.lampbg', {
        y:-2,
        duration:0.6,
        
    },'bb')
    tl1.to('.firstsidelamp', {
        scale:1.1,
        duration:0.6,
    },'bb')
    tl1.to('.lampInfo', {
        y:0,
        opacity:1,
        duration:0.6,
        stagger:0.2
    },'aa')
    tl1.to('.lampInfo1', {
        y:35,
        opacity:1,
        duration:0.6,
        stagger:0.2
    },'aa')
    tl1.to(page1Ref.current, {
        y:-640,
        duration:1,
        ease:'power3.out'
    },'pageRef')
    tl1.to(page2Ref.current, {
        y:-640,
        duration:1,
        ease:'power3.out'
    },'pageRef')
    tl1.from('.sidelamp1', {
        x:-500,
        duration:1,
        ease:'power3.inOut',
        
    },'c')
    tl1.to('.sidelamp1', {
        x:-500,
        duration:1,
        delay:1,
        ease:'power4.in',
        
    },'d')
    tl1.from('.lamp1info', {
        x:600,
        duration:1,
        
        ease:'power3.inOut',
        
    },'c')
    tl1.to('.lamp1info', {
        opacity:1,
        ease:'power3',
        delay:0.5,
        duration:1
    },'c')
    tl1.to('.lamp1slide', {
        scale:1,
        transformOrigin:'left',
        duration:0.8,
        ease:'power3.inOut'
    },'c')
    tl1.to('.lamp1info', {
        x:600,
        duration:1,
        
        delay:1,
        ease:'power4.in',
        
    },'d')
    tl1.to('.lamp1info', {
        opacity:0,
        ease:'power3',
        delay:1.4,
        duration:1
    },'d')
    tl1.to('.lamp1slide', {
        scale:0,
        transformOrigin:'right',
        duration:0.8,
        delay:1.4,
        ease:'power3.inOut'
    },'d')
    tl1.from('.sidelamp2', {
        x:-500,
        duration:1,
        ease:'power3.inOut',
        
    },'e')
    tl1.to('.sidelamp2', {
        x:-500,
        duration:1,
        delay:1,
        ease:'power4.in',
        
    },'f')
    tl1.from('.lamp2info', {
        x:600,
        duration:1,
        
        ease:'power3.inOut',
        
    },'e')
    tl1.to('.lamp2info', {
        opacity:1,
        ease:'power3',
        delay:0.5,
        duration:1
    },'e')
    tl1.to('.lamp2slide', {
        scale:1,
        transformOrigin:'left',
        duration:0.8,
        ease:'power3.inOut'
    },'e')
    tl1.to('.lamp2info', {
        x:600,
        duration:1,
        
        delay:1,
        ease:'power4.in',
        
    },'f')
    tl1.to('.lamp2info', {
        opacity:0,
        ease:'power3',
        delay:1.4,
        duration:1
    },'f')
    tl1.to('.lamp2slide', {
        scale:0,
        transformOrigin:'right',
        duration:0.8,
        delay:1.4,
        ease:'power3.inOut'
    },'f')
    tl1.from('.sidelamp3', {
        x:-500,
        duration:1,
        ease:'power3.inOut',
        
    },'g')
    tl1.to('.sidelamp3', {
        x:-500,
        duration:1,
        delay:1,
        ease:'power4.in',
        
    },'h')
    tl1.from('.lamp3info', {
        x:600,
        duration:1,
        
        ease:'power3.inOut',
        
    },'g')
    tl1.to('.lamp3info', {
        opacity:1,
        ease:'power3',
        delay:0.5,
        duration:1
    },'g')
    tl1.to('.lamp3slide', {
        scale:1,
        transformOrigin:'left',
        duration:0.8,
        ease:'power3.inOut'
    },'g')
    tl1.to('.lamp3info', {
        x:600,
        duration:1,
        
        delay:1,
        ease:'power4.in',
        
    },'h')
    tl1.to('.lamp3info', {
        opacity:0,
        ease:'power3',
        delay:1.4,
        duration:1
    },'h')
    tl1.to('.lamp3slide', {
        scale:0,
        transformOrigin:'right',
        duration:0.8,
        delay:1.4,
        ease:'power3.inOut'
    },'h')
    tl1.to('.lampslides', {
        opacity:0,
        delay:0.8,
        ease:'power2.inOut'
    },'h')
    
    tl1.to(slidingDivRef.current, {
        x:'-800vw',
        duration:11,
        ease:'none'
    },'i')
    tl1.from(lastArrowRef.current, { opacity:0, delay:1},'i')
    tl1.to('.translateArrows0', {
        x:'-12vw',
        duration:1.55,
        ease:'none'
    },'z')
    tl1.to('.translateArrows1', {
        x:'-27vw',
        duration:1.55,
        ease:'none'
    },'z')
    tl1.to('.translateArrows2', {
        x:'-42vw',
        duration:1.55,
        ease:'none'
    },'z')
    tl1.to('.translateArrows3', {
        x:'-57vw',
        duration:1.55,
        ease:'none'
    },'z')
    tl1.to('.translateArrows4', {
        x:'-72vw',
        duration:1.55,
        ease:'none'
    },'z')
    tl1.to('.translateArrows0', {
        x:'0vw',
        duration:0.1,
        ease:'power1.out'
    },'y')
    tl1.to('.translateArrows1', {
        x:'0vw',
        duration:0.1,
        ease:'power1.out'
    },'y')
    tl1.to('.translateArrows2', {
        x:'0vw',
        duration:0.1,
        ease:'power1.out'
    },'y')
    tl1.to('.translateArrows3', {
        x:'0vw',
        duration:0.1,
        ease:'power1.out'
    },'y')
    tl1.to('.translateArrows4', {
        x:'0vw',
        duration:0.1,
        ease:'power1.out'
    },'y')
    tl1.to(slidingDivRef.current, {
        x:'0vw',
        duration:2,
        ease:'back.out'
    },'x')
    tl1.from(thanksRef.current, {
        x:'71vw',
        delay:0.95,
        opacity:0
    },'x')


});

    return (
        <div ref={mainRef} className='min-h-screen w-screen bg-black text-white'>
            <div ref={page1Ref} className='relative min-h-screen w-screen bg-black pt-[5vw]'>
                <div ref={logoRef} className='absolute z-[999] top-[21.2vw] left-[49vw] h-[15vw] w-[40vw] flex items-center justify-center'>
                    {logoArr.map((item, index) => (
                        <span key={index} className='text-[8vw] text-white font-mono font-extrabold'>{item}</span>
                    ))}
                </div>
                <div ref={endRef} className='text-[10vw] font-mono font-extrabold absolute top-[22vw] left-[50vw] -translate-x-1/2 -translate-y-1/2 opacity-0'>thanks</div>
                <div className='navbar fixed top-0 left-0 z-[998] h-[4vw] w-full backdrop-blur-md '></div>
                <div className='centerLogoText absolute top-0 left-0 z-[997] h-[15vw] w-full  text-center'>
                <h1 ref={centerLogoText} className='inline-block text-white font-mono font-semibold text-[23vw] uppercase'>aethera</h1>
                <p ref={paraRef} className='flex flex-start font-mono text-left text-[1.6vw] leading-[1.8vw] ml-[1vw] translate-y-[5vw] translate-x-[2vw] mt-[10vw]'>A modern lighting experience<br/>inspired by nature and<br/>designed for everyday living</p>
                </div>
                <div ref={heroImgRef} className='absolute scale-0 origin-bottom top-0 left-0 h-screen w-full bg-red-300 z-[996]'>
                <img className='h-full w-full object-cover' src="../../../public/bg2.webp" alt="" />
                </div>
                <div ref={lamp1Ref} className='absolute pb-[20vw] z-[999] pr-[10vw] h-[115vw] w-[100vw] flex items-center'>
                    <img className='h-[220vw] w-[170vw] object-top mr-[5vw]' src="../../../public/l1r.png" alt="" />
                </div>
                <div ref={lamp2Ref} className='lampbg absolute h-[50vw] w-[33.3vw] bg-neutral- top-[-2vw] left-0 translate-y-[50vw] flex flex-col items-center justify-center pt-[1vw] '>
                    <img className='firstsidelamp h-[50vw] w-[20vw] object-center' src="../../../public/l2r.png" alt="" />
                    <div className='lampInfo h-[10vw] w-[20vw] text-center flex flex-col gap-[0.5vw] opacity-0'>
                        <h1 className='uppercase text-[1.8vw] font-semibold'>calm</h1>
                        <p className='text-[1.2vw] leading-[1.4vw]'>Feel the pleaseure, joy and <br/>more relaxing</p>
                    </div>
                </div>
                <div ref={lamp1bgRef} className='lampbg absolute h-[50vw] w-[33.4vw] top-[18vw] left-[33.3vw] flex items-center justify-center  translate-y-[50vw] pt-[40.8vw]'>
                <div className='lampInfo1 h-[10vw] w-[20vw] text-center flex flex-col gap-[0.5vw] translate-y-[4vw] opacity-0'>
                    <h1 className='uppercase text-[1.8vw] font-semibold'>focused</h1>
                    <p className='text-[1.2vw] leading-[1.4vw]'>Focused light for experience<br/>better understanding</p>
                </div>
                </div>
                <div ref={lamp3Ref} className='lampbg absolute h-[50vw] w-[33.3vw] bg-neutral- top-[-2vw] right-0 translate-y-[50vw] flex flex-col items-center justify-center pt-[1vw]'>
                    <img className='firstsidelamp h-[50vw] w-[20vw] object-center' src="../../../public/l3r.png" alt="" />
                    <div className='lampInfo h-[10vw] w-[20vw] text-center flex flex-col gap-[0.5vw] translate-y-[3vw] opacity-0'>
                        <h1 className='uppercase text-[1.8vw] font-semibold'>energy</h1>
                        <p className='text-[1.2vw] leading-[1.4vw]'>Enhance the spirit for fun<br/>and entertainment</p>
                    </div>
                </div>          
            </div>
            <div ref={page2Ref} className='relative h-screen w-screen flex'>
                
                <div className='relative h-full w-[40vw] '>
                    <img className='sidelamp1 absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[-35vw] h-[62vw] w-[35vw]' src="../../../public/l1r.png" alt="" />
                    <img className='sidelamp2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[62vw] w-[35vw]' src="../../../public/l2r.png" alt="" />
                    <img className='sidelamp3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[62vw] w-[35vw]' src="../../../public/l3r.png" alt="" />
                </div>
                <div className='slidinglamps relative h-full w-[60vw]'>
                    <p className='lamp1info w-[55vw] mr-[2vw] inline-block font-mono absolute top-1/3 left-1/2 translate-x-[-30vw] text-white -translate-y-1/2 opacity-0'>Elegant cylindrical lamp featuring dark walnut caps and a warm amber linen shade. A refined vertical brass bar accents the front, while a braided brown cord adds rustic elegance for a cozy ambiance.</p>
                    <p className='lamp2info w-[55vw] mr-[2vw] inline-block font-mono absolute top-1/3 left-1/2 translate-x-[-30vw] text-white -translate-y-1/2 opacity-0'>Minimalist cylinder lamp with light oak caps and a crisp white linen shade. A sleek silver metal strip provides a subtle contrast, complemented by a white braided cord, radiating modern simplicity and bright elegance.</p>
                    <p className='lamp3info w-[55vw] mr-[2vw] inline-block font-mono absolute top-1/3 left-1/2 translate-x-[-30vw] text-white -translate-y-1/2 opacity-0'>Striking cylindrical lamp featuring sleek black caps and a warm amber shade. A moody matte black vertical strip runs along the front, paired with a black braided cord, delivering modern minimalist drama and sophistication.</p>
                    <div className='lampslides absolute top-[25vw] left-[16vw] -translate-x-1/2 -translate-y-1/2 h-[0.3vw] w-[32vw] flex gap-[4px]'>
                        <div className='group relative h-full w-1/3 bg-neutral-600 rounded-full'>
                            <div className='lamp1slide absolute top-0 left-0 h-full w-full rounded-full bg-white scale-0'></div>
                        </div>
                        <div className='relative h-full w-1/3 bg-neutral-600 rounded-full'>
                            <div className='lamp2slide absolute top-0 left-0 h-full w-full rounded-full bg-white scale-0'></div>
                        </div>
                        <div className='relative h-full w-1/3 bg-neutral-600 rounded-full'>
                            <div className='lamp3slide absolute top-0 left-0 h-full w-full rounded-full bg-white scale-0'></div>
                        </div>
                    </div>
                </div>
                <div ref={slidingDivRef} className='absolute opacity- top-0 left-[0vw] h-[50vw] w-[900vw] flex'>
                    <div ref={lastArrowRef} className='h-full w-[100vw] bg-transparent text-[16vw] translate-x-[-23vw] font-extrabold flex items-center pr-[53.5vw] justify-center'>{'<'}</div>
                    <div ref={thanksRef} className='h-full w-[100vw] absolute top-0 left-[5vw] font-extrabold text-white text-[16vw] z-[999] bg-transparent flex items-center justify-center '>{'Live It'}</div>
                    <div className='h-full w-[600vw] bg-black shrink-0 flex items-center justify-center'>
                        <h1 className='phase1 text-[24vw] uppercase text-white font-extrabold '> we are here to let you live the baggy x life</h1>
                    </div>
                    <div className='h-full w-[100vw] bg-black shrink-0 flex items-center justify-center'>
                        <h1 className='phase1 text-[8vw] uppercase text-white font-extrabold'>there we go...</h1>
                    </div>
                    <div className='h-full w-[100vw] bg-black shrink-0 flex items-center justify-center -tracking-[10vw] '>
                        <h1 className='translateArrows0 text-[45vw] text-white font-bold -translate-y-[5vw]'>{'<'}</h1>
                        <h1 className='translateArrows1 text-[45vw] text-white font-bold -translate-y-[5vw]'>{'<'}</h1>
                        <h1 className='translateArrows2 text-[45vw] text-white font-bold -translate-y-[5vw]'>{'<'}</h1>
                        <h1 className='translateArrows3 text-[45vw] text-white font-bold -translate-y-[5vw]'>{'<'}</h1>
                        <h1 className='translateArrows4 text-[45vw] text-white font-bold -translate-y-[5vw]'>{'<'}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default P5Home;


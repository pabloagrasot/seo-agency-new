<script>
    import Typing from "./typing.svelte";
    import video from '$lib/images/video-seo.mp4';
    import heroJPG from '$lib/images/hero-img.jpg';
    import heroAVIF from '$lib/images/hero-img.avif';

</script>

<section
    class="relative py-[6rem] xl:pb-[120px] top-[7rem] bg-indigo-50 dark:bg-slate-700"
>
    <div
        class="w-full xl:max-w-[1320px] lg:max-w-[1140px] md:max-w-[530px] mx-auto	"
    >
        <div class="flex flex-wrap items-center">
            <div class="w-full lg:w-6/12 px-3">
                <div
                    class="md:max-w-[530px] text-center lg:text-left lg:ml-0 lg:mr-auto"
                >
                    <div
                        class="mx-auto lg:mx-0 mb-12 bg-indigo-500/[.1] dark:bg-white/[.1] w-max rounded-lg"
                    >
                        <p
                            class="text-indigo-600 dark:text-white font-semibold pl-4 pr-8 py-2 max-[400px]:flex max-[400px]:flex-col"
                        >
                            🏷️ Analizamos y optimizamos

                            <Typing />
                        </p>
                    </div>
                    <h1
                        class="mb-5	text-[2.5rem] md:text-[50px] text-slate-800 font-bold leading-none dark:text-indigo-50"
                    >
                        Posicionamiento Web en Madrid
                    </h1>
                    <p class="mb-12	">
                        Handcrafted Tailwind CSS template for your next -
                        Startup, Business, Agency or SaaS Website. Comes with
                        refreshing design and everything you need to kickstart
                        your next web project.
                    </p>
                    <div
                        class="mb-16 lg:mb-0"
                    >
                        <a
                            href="#name"
                            class="text-white bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-md"
                        >
                            Miniauditoría Gratis →
                        </a>
                    </div>
                </div>
            </div>



            <div class="w-full lg:w-6/12 px-3">
                <div class="relative w-full h-[560px] md:pb-2">

                    <div class="absolute top-0 right-0 z-0">
                        <picture>

                        <source srcset={heroAVIF} type="image/avif">
                            <img src={heroJPG} alt="poscionamiento SEO">
                        </picture>
                    </div>

                    <div class="absolute bottom-0 left-0">
                            <video class="relative bottom-0 left-0 z-20" preload="auto" autoplay loop src={video}><track kind="captions"/></video>
                            <div class="transparent-box bg-white/[0.1] w-full h-full absolute md:-right-5 -top-5 z-10"></div>
                    </div>
            </div>





        </div>
    </div>
</section>

<style>
    section {
        background-image: url(/noise.svg);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: bottom;
    }

    .transparent-box{
        backdrop-filter: blur(6px)
    }

</style>

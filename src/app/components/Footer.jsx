import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-[#282828] px-6 sm:px-10 md:px-20 lg:px-[160px] xl:px-[240px] py-6 flex flex-col gap-6">
            <div>
                <h3 className="text-[#F3F3F3] font-bold text-lg">Have a project in mind?</h3>
                <p className="text-[#F3F3F3] font-bold text-lg">akeflatholm@gmail.com</p>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
                <div className="flex flex-row gap-6">
                    <Link href="https://github.com/CodingQuercus" target="_blank" className="text-[#F3F3F3] hover:underline">
                        GitHub
                    </Link>
                    <Link href="https://www.linkedin.com/in/akeflatholm " target="_blank" className="text-[#F3F3F3] hover:underline">
                        LinkedIn
                    </Link>
                    <Link href="#contact" className="text-[#F3F3F3] hover:underline">
                        Contact
                    </Link>
                </div>
                <div className="text-[#F3F3F3] text-sm sm:text-base text-center sm:text-right">
                    Developed by <strong>Åke Flatholm</strong> with <strong>Next.JS</strong> @ 2025.
                </div>
            </div>
        </footer>
    );
};

export default Footer;

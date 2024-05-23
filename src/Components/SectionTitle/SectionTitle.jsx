

const SectionTitle = ({heading, subHeading}) => {
    
    return (
        <div className="text-center mx-auto w-3/4 md:w-3/12 mb-8">
            <p className="text-yellow-500 mb-2">---{subHeading}---</p>
            <h3 className="text-3xl text-black uppercase border-y-4 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;
function ExerciseCard(props) {
    const {name, image, description} = props;

    return (
        <div className="ronded-lg h-56 w-96 relative">
            <img
                src={image}
                className="w-full h-full object-cover absolute"
                alt=""
            />
            <div className="absolute top-1/2 left-1/8 p-5 text-white">
                <p className="font-bold text-lg">
                    {name}
                </p>
                <p className="text-base font-medium">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default ExerciseCard;
import image from './../assets/images/Peliuculas-ghibli.gif'

const Loading = () => {
    return (
        <div className="d-flex justify-content-center text-center">
            <img id="img-loading" src={image} alt="loading" />
        </div>
    )
}
export default Loading;
export default function BackgroundImage() {
    return (
        <div style={{ height: '50vh', marginTop: '10vh' }}>
            <img src={process.env.PUBLIC_URL + '/bg5.jpeg'} alt="list" style={{ width: '100%' }} className="" />
        </div>
    )
}
export default function BackgroundImage() {
    return (
        <div style={{ height: '50vh', marginTop: '10vh' }}>
            <img src={process.env.PUBLIC_URL + 'background/bg6.jpg'} alt="list" style={{ width: '100%' }} className="blur-xm" />
        </div>
    )
}
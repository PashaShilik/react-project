import img from '@assets/error.gif';

export function ErrorMessage() {
    return (
        <>
        <img style={{
            display: 'block',
            width: '250px',
            height: '250px',
            objectFit: 'contain',
            margin: "0 auto"
        }} src={img} alt='error' />
        <h2 
        style={{
            alignSelf: "center",
            marginTop: '20px'
        }}>Something went wrong. Try to reload page !</h2>
        </>
    )
}


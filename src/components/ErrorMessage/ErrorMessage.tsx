import img from '@/assets/error.gif';

export function ErrorMessage() {
    return (
        <>
            <img style={{
                display: 'block',
                width: '250px',
                height: '250px',
                objectFit: 'contain',
                margin: "20px auto 0"
            }} src={img} alt='error' />
            <h2
                style={{
                    alignSelf: "center",
                    textAlign: "center",
                    margin: '20px 0'
                }}>Something went wrong. Try to reload page !</h2>
        </>
    )
}


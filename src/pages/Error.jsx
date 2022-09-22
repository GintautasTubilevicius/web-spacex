import { Link } from 'react-router-dom';

export default function Error() {
    return (
        <>
            <section className="flex flex-col items-center justify-center text-center h-screen">
                <h1 className="text-white font-bold text-2xl m-8">Something wrong. Not found!</h1>
                <Link to="/" className="btn">Back to start Page</Link>
            </section>
        </>
    )
}
export default function Section({ title, children }) {
    return (
        <>
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <div className="px-10 py-5">
                {children}
            </div>
            </>
    )
}
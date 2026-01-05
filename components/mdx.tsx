export function Callout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="my-8 rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 text-sm text-blue-900">
            {children}
        </div>
    );
}

export function Note({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="my-8 rounded-lg border-l-4 border-gray-400 bg-gray-50 p-4 text-sm text-gray-800">
            {children}
        </div>
    );
}

export function Quote({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <blockquote className="my-8 border-l-4 border-gray-300 pl-4 italic text-gray-700">
            {children}
        </blockquote>
    );
}

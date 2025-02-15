import Navbar from "../Layouts/Navbar";
import { Link } from "@inertiajs/react";

const Home = ({ posts }) => {
    return (
        <div className="container mx-auto p-4">
            <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                <div className="flex justify-end">
                    <Link href="/post/create" className="btn btn-primary mb-4 ">
                        Create Post
                    </Link>
                </div>
                <table className="min-w-full border-collapse">
                    <thead>
                        <tr className="bg-blue-500 text-white">
                            <th className="px-4 py-2 text-left">ID</th>
                            <th className="px-4 py-2 text-left">Body</th>
                            <th className="px-4 py-2 text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.data.map((item) => (
                            <tr
                                key={item.id}
                                className="border-b hover:bg-gray-100"
                            >
                                <td className="px-4 py-2">{item.id}</td>
                                <td className="px-4 py-2 truncate max-w-xs">
                                    {item.body}
                                </td>
                                <td className="px-4 py-2">
                                    <Link
                                        href={`/posts/${item.id}/delete`}
                                        className="btn btn-secondary hover:underline"
                                    >
                                        Delete
                                    </Link>
                                </td>
                                <td className="px-4 py-2">
                                    <Link
                                        href={`/posts/${item.id}/edit`}
                                        className="btn btn-primary hover:underline"
                                    >
                                        Edit
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex flex-wrap justify-center items-center gap-2 mt-6">
                {posts.links.map((link, index) =>
                    link.url ? (
                        <Link
                            key={index}
                            href={link.url}
                            className={`px-4 py-2 border rounded-md ${
                                link.active
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                            }`}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                        />
                    ) : (
                        <span
                            key={index}
                            className="px-4 py-2 border rounded-md bg-gray-300 text-gray-500 cursor-not-allowed"
                            dangerouslySetInnerHTML={{ __html: link.label }}
                        />
                    )
                )}
            </div>
        </div>
    );
};

Home.layout = (page) => <Navbar children={page} title="Welcome" />;

export default Home;

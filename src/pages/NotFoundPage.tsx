import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="text-center">
                <h1 className="text-7xl font-bold text-indigo-600 mb-4">404</h1>
                <h2 className="text-2xl font-semibold mb-2 text-gray-800">Trang không tồn tại</h2>
                <p className="text-gray-600 mb-6">Trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.</p>
                <Link
                    to="/"
                    className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                >
                    Quay về trang chủ
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;

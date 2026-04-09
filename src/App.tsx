import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DataAnalysisCourse from './pages/DataAnalysisCourse';

interface Course {
  id: string;
  name: string;
  description: string;
  icon: string;
}

const Home: React.FC = () => {
  const courses: Course[] = [
    {
      id: 'python',
      name: 'Python基础',
      description: '学习Python编程语言的基础知识和应用',
      icon: '📱'
    },
    {
      id: 'data-analysis',
      name: '数据分析技术',
      description: '掌握数据处理和分析的核心技术',
      icon: '📊'
    },
    {
      id: 'data-collection',
      name: '数据采集与处理',
      description: '学习如何从各种来源采集和处理数据',
      icon: '🔄'
    },
    {
      id: 'supply-chain',
      name: '供应链数据分析',
      description: '运用数据分析技术优化供应链管理',
      icon: '📦'
    },
    {
      id: 'database',
      name: '数据库原理与应用',
      description: '了解数据库的基本原理和实际应用',
      icon: '💾'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* 导航栏 */}
      <nav className="bg-white shadow-md fixed w-full z-10">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">陈雪霜的个人页面</h1>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">首页</Link>
            <Link to="/#courses" className="text-gray-700 hover:text-blue-600 transition-colors">课程</Link>
            <Link to="/#about" className="text-gray-700 hover:text-blue-600 transition-colors">关于我</Link>
          </div>
        </div>
      </nav>

      {/* 个人信息 */}
      <section id="home" className="pt-24 pb-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">陈雪霜</h2>
              <p className="text-2xl text-gray-600 mb-6">广东科学技术职业学院</p>
              <p className="text-xl text-gray-600 mb-8">商学院 · 商务数据分析与应用专业</p>
              <div className="flex space-x-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  了解更多
                </button>
                <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                  联系我
                </button>
              </div>
            </div>
            <div className="md:w-1/3">
              <div className="w-48 h-48 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-6xl">👩‍🎓</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 课程列表 */}
      <section id="courses" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">我的课程</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div 
                key={course.id} 
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow transform hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{course.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{course.name}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                {course.id === 'data-analysis' ? (
                  <Link to="/courses/data-analysis" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                    查看详情
                    <span className="ml-2">→</span>
                  </Link>
                ) : (
                  <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                    查看详情
                    <span className="ml-2">→</span>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 关于我 */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">关于我</h2>
          <div className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
            <p className="mb-4">
              我是陈雪霜，就读于广东科学技术职业学院商学院商务数据分析与应用专业。
              我对数据分析和编程有着浓厚的兴趣，希望通过学习掌握更多实用的技能。
            </p>
            <p className="mb-4">
              在大学期间，我学习了Python基础、数据分析技术、数据采集与处理、供应链数据分析、数据库原理与应用等课程，
              为将来的职业发展打下了坚实的基础。
            </p>
            <p>
              我相信数据分析是未来的核心竞争力，希望能够将所学知识应用到实际工作中，
              为企业和社会创造价值。
            </p>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2026 陈雪霜的个人页面</p>
          <p className="text-gray-400 text-sm mt-2">部署于 Cloudflare Pages</p>
        </div>
      </footer>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses/data-analysis" element={<DataAnalysisCourse />} />
      </Routes>
    </Router>
  );
};

export default App;
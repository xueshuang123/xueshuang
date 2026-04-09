import React from 'react';
import { Link } from 'react-router-dom';

const DataAnalysisCourse: React.FC = () => {
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

      {/* 课程头部 */}
      <section className="pt-24 pb-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <Link to="/" className="mr-4 text-blue-600 hover:text-blue-800">
              ← 返回课程列表
            </Link>
            <h1 className="text-3xl font-bold text-gray-800">数据分析技术</h1>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <p className="text-gray-600 mb-6">
                本课程是商务数据分析与应用专业的核心课程，旨在培养学生掌握数据分析的基本理论、方法和技术，
                能够运用数据分析工具解决实际商务问题的能力。
              </p>
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h3 className="text-lg font-semibold text-blue-800 mb-4">课程信息</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-600">学期：</p>
                    <p className="font-medium">大二第二学期</p>
                  </div>
                  <div>
                    <p className="text-gray-600">先修课程：</p>
                    <p className="font-medium">Python基础、数据采集与处理、商务数据分析与应用基础</p>
                  </div>
                  <div>
                    <p className="text-gray-600">学分：</p>
                    <p className="font-medium">4</p>
                  </div>
                  <div>
                    <p className="text-gray-600">总学时：</p>
                    <p className="font-medium">64</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/3">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">学习目标</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-600">•</span>
                    <span>掌握数据分析的基本概念和方法</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-600">•</span>
                    <span>熟练使用Python进行数据处理和分析</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-600">•</span>
                    <span>能够运用数据分析工具解决实际商务问题</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-600">•</span>
                    <span>培养数据思维和数据驱动决策能力</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 课程大纲 */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">课程大纲</h2>
          <div className="bg-white rounded-xl shadow-md p-6">
            {/* 第1章 */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">第1章 数据分析概述</h3>
              <div className="ml-4 space-y-4">
                <div>
                  <h4 className="font-medium text-gray-700">1.1 数据分析的基本概念</h4>
                  <p className="text-gray-600 mt-1">数据分析的定义、特点、作用和应用领域</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">1.2 数据分析的流程</h4>
                  <p className="text-gray-600 mt-1">数据获取、数据预处理、数据分析、结果展示、决策支持</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">1.3 数据分析的方法体系</h4>
                  <p className="text-gray-600 mt-1">描述性分析、预测性分析、规范性分析</p>
                </div>
              </div>
            </div>

            {/* 第2章 */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">第2章 数据预处理</h3>
              <div className="ml-4 space-y-4">
                <div>
                  <h4 className="font-medium text-gray-700">2.1 数据清洗</h4>
                  <p className="text-gray-600 mt-1">缺失值处理、异常值检测与处理、重复值处理</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">2.2 数据集成</h4>
                  <p className="text-gray-600 mt-1">多源数据整合、数据格式转换、数据合并</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">2.3 数据转换</h4>
                  <p className="text-gray-600 mt-1">数据标准化、数据归一化、数据离散化</p>
                </div>
              </div>
            </div>

            {/* 第3章 */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">第3章 描述性数据分析</h3>
              <div className="ml-4 space-y-4">
                <div>
                  <h4 className="font-medium text-gray-700">3.1 数据统计描述</h4>
                  <p className="text-gray-600 mt-1">集中趋势指标、离散程度指标、分布形态指标</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">3.2 数据可视化</h4>
                  <p className="text-gray-600 mt-1">图表类型选择、Matplotlib、Seaborn库使用</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">3.3 数据探索性分析</h4>
                  <p className="text-gray-600 mt-1">相关性分析、分组分析、交叉分析</p>
                </div>
              </div>
            </div>

            {/* 第4章 */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">第4章 预测性数据分析</h3>
              <div className="ml-4 space-y-4">
                <div>
                  <h4 className="font-medium text-gray-700">4.1 回归分析</h4>
                  <p className="text-gray-600 mt-1">线性回归、多元回归、多项式回归</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">4.2 分类分析</h4>
                  <p className="text-gray-600 mt-1">逻辑回归、决策树、随机森林</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">4.3 聚类分析</h4>
                  <p className="text-gray-600 mt-1">K-means聚类、层次聚类、DBSCAN</p>
                </div>
              </div>
            </div>

            {/* 第5章 */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">第5章 商务数据分析应用</h3>
              <div className="ml-4 space-y-4">
                <div>
                  <h4 className="font-medium text-gray-700">5.1 销售数据分析</h4>
                  <p className="text-gray-600 mt-1">销售趋势分析、客户购买行为分析、产品销售分析</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">5.2 客户数据分析</h4>
                  <p className="text-gray-600 mt-1">客户细分、客户价值分析、客户流失预测</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">5.3 市场数据分析</h4>
                  <p className="text-gray-600 mt-1">市场趋势分析、竞争对手分析、市场机会识别</p>
                </div>
              </div>
            </div>

            {/* 第6章 */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">第6章 数据分析工具与实践</h3>
              <div className="ml-4 space-y-4">
                <div>
                  <h4 className="font-medium text-gray-700">6.1 Python数据分析库</h4>
                  <p className="text-gray-600 mt-1">NumPy、Pandas、Scikit-learn</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">6.2 数据分析案例实践</h4>
                  <p className="text-gray-600 mt-1">电商数据分析、金融数据分析、物流数据分析</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">6.3 数据分析报告撰写</h4>
                  <p className="text-gray-600 mt-1">报告结构、可视化呈现、结论与建议</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 课程资源 */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">课程资源</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">参考资料</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600">•</span>
                  <span>《Python数据分析与挖掘实战》</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600">•</span>
                  <span>《商务数据分析》</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600">•</span>
                  <span>《数据可视化实战》</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">在线资源</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600">•</span>
                  <span>Python官方文档</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600">•</span>
                  <span>Kaggle数据集</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600">•</span>
                  <span>数据科学社区</span>
                </li>
              </ul>
            </div>
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

export default DataAnalysisCourse;
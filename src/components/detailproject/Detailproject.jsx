import './detailproject.css';
import { Search } from '../../components'
import a1 from '../../assets/games/a1.png'
import a2 from '../../assets/games/a2.png'
import a3 from '../../assets/games/a3.png'  
import a4 from '../../assets/games/a4.png'
import a5 from '../../assets/games/a6.png'

const Detailproject = () => {
  
  return (
    <div className='dh__detailproject section__padding'>
      <div className="dh__container">
        <Search/>
        <div class="breadcrumb">
        <div class="container">
            <p>Trang chủ</p>
            <p class="separator">⮕</p>
            <p>Game</p>
            <p class="separator">⮕</p>
            <p class="current">Clash of Clans</p>
        </div>
        </div>

        <div class="main">
            <div class="container">
                <div class="content-grid">
                    <div class="left-column">
                        <div class="project-gallery">
                            <div class="main-image-container">
                                <img src={a5} alt="Project preview" class="main-image" id="mainImage"/>
                                <button class="nav-btn prev-btn" id="prevBtn">
                                    <i class="fas fa-chevron-left"></i>
                                </button>
                                <button class="nav-btn next-btn" id="nextBtn">
                                    <i class="fas fa-chevron-right"></i>
                                </button>
                            </div>
                            <div class="thumbnails">
                                <img src={a1} alt="Thumbnail 1" class="thumbnail active" data-index="0"/>
                                <img src={a2} alt="Thumbnail 2" class="thumbnail" data-index="1"/>
                                <img src={a3} alt="Thumbnail 3" class="thumbnail" data-index="2"/>
                                <img src={a4} alt="Thumbnail 4" class="thumbnail" data-index="3"/>
                            </div>
                            <p class="image-count">Ảnh demo (5 ảnh)</p>
                            <button class="demo-btn">
                                <i class="fas fa-play"></i>
                                Xem demo
                            </button>
                        </div>

                        <div class="author-card">
                            <div class="author-info">
                                <div class="author-left">
                                    <div class="author-avatar">
                                        <img src={a1} alt="Author"/>
                                    </div>
                                    <div class="author-details">
                                        <h3>Duong Minh Vuong</h3>
                                        <div class="rating">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="author-stats">
                                    <div class="stat">
                                        <div class="stat-number">17</div>
                                        <div class="stat-label">Source Code</div>
                                    </div>
                                    <div class="stat">
                                        <div class="stat-rating">
                                            <i class="fas fa-star"></i>
                                            <span>5/5</span>
                                        </div>
                                        <div class="stat-label">Đánh giá(100)</div>
                                    </div>
                                    <div class="social-links">
                                        <button class="social-btn"><i class="fab fa-facebook"></i></button>
                                        <button class="social-btn"><i class="fas fa-envelope"></i></button>
                                        <button class="social-btn"><i class="fas fa-comments"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div class="contact-author">
                                <p>Liên hệ tác giả</p>
                            </div>
                        </div>

                        <div class="tabs">
                            <div class="tab-buttons">
                                <button class="tab-btn active" data-tab="description">Mô tả chi tiết</button>
                                <button class="tab-btn" data-tab="installation">Hướng dẫn cài đặt</button>
                                <button class="tab-btn" data-tab="reviews">Đánh giá</button>
                            </div>
                            <div class="tab-content">
                                <div class="tab-pane active" id="description">
                                    <p>MVD SmartWorld là một template website hiện đại được xây dựng với HTML5, Bootstrap CSS và JavaScript. Thiết kế responsive, tối ưu cho mọi thiết bị và trình duyệt.</p>
                                </div>
                                <div class="tab-pane" id="installation">
                                    <p>Hướng dẫn cài đặt sẽ được cập nhật sớm...</p>
                                </div>
                                <div class="tab-pane" id="reviews">
                                    <p>Đánh giá từ người dùng sẽ được hiển thị tại đây...</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="sidebar">
                        <div class="project-card">
                            <div class="project-badge">MÃ PROJECT 001</div>
                            <h1 class="project-title">MVD SmartWorld Thế giới di động-HTML, Bootstrap CSS, Javascripts</h1>
                            <div class="project-rating">
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <span class="rating-count">(68 đánh giá)</span>
                            </div>
                            <div class="project-stats">
                                <div class="stat-item">
                                    <i class="fas fa-download"></i>
                                    <span>123</span>
                                </div>
                                <div class="stat-item">
                                    <i class="fas fa-eye"></i>
                                    <span>1.3k</span>
                                </div>
                            </div>
                            <p class="project-description">
                                MVD SmartWorld, được xây dựng với HTML, Bootstrap CSS & Javascript. Thiết kế tinh tế, hiệu năng cao, dễ dàng tùy biến để phù hợp với mọi cá nhân/doanh nghiệp. Tương thích mọi thiết bị, tối ưu SE
                            </p>
                            
                            <div class="project-details">
                                <div class="detail-row">
                                    <span class="detail-label">Danh mục</span>
                                    <span class="detail-value red">Dịch vụ</span>
                                </div>
                                <div class="detail-row">
                                    <span class="detail-label">Thể loại</span>
                                    <span class="detail-value red">Website</span>
                                </div>
                                <div class="detail-row">
                                    <span class="detail-label">Ngày đăng</span>
                                    <span class="detail-value">24/06/2025</span>
                                </div>
                                <div class="detail-row">
                                    <span class="detail-label">Loại file</span>
                                    <span class="detail-value">Full mã nguồn</span>
                                </div>
                                <div class="detail-row">
                                    <span class="detail-label">File download</span>
                                    <span class="detail-value">mvdsmart-main.zip</span>
                                </div>
                            </div>

                            <div class="alerts">
                                <div class="alert-item">
                                    <i class="fas fa-exclamation-triangle"></i>
                                    <span>Gửi thông báo lỗi</span>
                                </div>
                                <div class="alert-item">
                                    <i class="fas fa-exclamation-triangle"></i>
                                    <span>Báo cáo vi phạm bản quyền</span>
                                </div>
                            </div>

                            <div class="commitment-box">
                                <div class="commitment-title">CAM KẾT TỪ CHÚNG TÔI</div>
                                <div class="commitment-item">
                                    <i class="fas fa-check-circle"></i>
                                    <span>Hỗ trợ cài đặt</span>
                                </div>
                                <div class="commitment-item">
                                    <i class="fas fa-check-circle"></i>
                                    <span>Code đầy đủ giống demo</span>
                                </div>
                            </div>

                            <div class="action-buttons">
                                <button class="btn btn-primary">
                                    <i class="fas fa-download"></i>
                                    Download ngay
                                </button>
                                <button class="btn btn-danger">Liên hệ quảng cáo Project</button>
                                <button class="btn btn-success">Đặt project theo yêu cầu</button>
                                <button class="btn btn-outline">
                                    <i class="fas fa-heart"></i>
                                    Lưu vào yêu thích
                                </button>
                            </div>
                        </div>

                        <div class="share-card">
                            <h3>CHIA SẺ NHANH</h3>
                            <div class="share-icon">👍</div>
                            <p>Chia sẻ tới bạn bè</p>
                            <button class="share-btn">👍</button>
                        </div>

                        <div class="related-card">
                            <h3>⭐ Các project nổi bật khác</h3>
                            <div class="related-projects">
                                <div class="related-item">
                                    <img src={a5} alt="Project 1"/>
                                    <div class="related-info">
                                        <p>E-commerce Template</p>
                                        <div class="related-rating">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="related-item">
                                    <img src="https://via.placeholder.com/64x48/E74C3C/FFFFFF?text=P2" alt="Project 2"/>
                                    <div class="related-info">
                                        <p>Portfolio Website</p>
                                        <div class="related-rating">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="related-item">
                                    <img src="https://via.placeholder.com/64x48/27AE60/FFFFFF?text=P3" alt="Project 3"/>
                                    <div class="related-info">
                                        <p>Dashboard Admin</p>
                                        <div class="related-rating">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Detailproject
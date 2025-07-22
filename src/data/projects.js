import a1 from '../assets/games/Soul_Knight/a1.png'
import a2 from '../assets/games/Soul_Knight/a2.png'
import a3 from '../assets/games/Soul_Knight/a3.png'
import a4 from '../assets/games/Soul_Knight/a4.png'
import a5 from '../assets/games/Soul_Knight/a5.png'
import a6 from '../assets/games/Soul_Knight/a6.png'
import a7 from '../assets/games/Soul_Knight/a7.png'
import a8 from '../assets/games/Soul_Knight/a8.png'
import a9 from '../assets/games/Soul_Knight/a9.png'
import a10 from '../assets/games/Soul_Knight/a10.png'

export const projects = [
  {
    id: "001",
    title: "Triple Tile",
    tech: "Unity, C#, Addressables",
    type: "Game",
    image: a1,
    description_sub: "Game giải đố 3 tile thư giãn với thiết kế trực quan, hiệu ứng mượt và gameplay gây nghiện.",
    description: "Triple Tile là game giải đố match-3, nơi người chơi cần ghép 3 tile giống nhau để xóa chúng khỏi bàn cờ. Trò chơi mang lại cảm giác thư giãn nhờ hiệu ứng chuyển động mượt, âm thanh nhẹ nhàng, cùng hệ thống level và tile được quản lý linh hoạt bằng Addressables. Logic chơi được tối ưu để xử lý các tình huống lấp đầy, rollback và xếp tile thông minh.",
    gallery: [a1, a1, a1, a1, a1, a1, a1, a1, a1, a1],
    demoLinks: [
      "https://thedevhouse.shop/g1-tripletile/"
    ],
    orientation: "portrait",
  },
  {
    id: "002",
    title: "Soul Knight",
    tech: "Unity Engine, C#",
    type: "Game",
    image: a2,
    description_sub: "Trải nghiệm cuộc chiến chiến thuật từ góc nhìn top-down – xây dựng phòng thủ, triển khai kỹ năng theo thời gian thực với giao diện sống động và hiệu ứng mãn nhãn!",
    description: "Bước vào thế giới của những trận chiến chiến thuật đỉnh cao trong tựa game thủ thành góc nhìn top-down! Bạn sẽ vào vai anh hùng, xây dựng hệ thống phòng thủ vững chắc, bố trí đơn vị một cách thông minh và kích hoạt các kỹ năng đặc biệt theo thời gian thực để chống lại từng đợt tấn công dữ dội của kẻ thù.",
    gallery: [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10],
    demoLinks: [
      "https://thedevhouse.shop/g3-soulknight/"
    ],
    orientation: "landscape",
  },
  {
    id: "003",
    title: "Coffee Rush",
    tech: "Unity, C#, DOTween",
    type: "Game",
    image: a3,
    description_sub: "Game xếp hàng quán cà phê nhịp độ nhanh với hiệu ứng chuyển động mượt và gameplay cuốn hút.",
    description: "Coffee Rush là game casual nơi người chơi phục vụ khách hàng bằng cách xếp hàng đúng món đồ uống. Trò chơi có nhịp độ nhanh, hiệu ứng sinh động bằng DOTween, và hệ thống level đa dạng. Người chơi cần phản xạ nhanh và đưa ra quyết định chính xác để hoàn thành đơn hàng trong thời gian giới hạn.",
    gallery: [a3, a3, a3, a3, a3, a3, a3, a3, a3, a3],
    demoLinks: [
      "https://demo-server1.codmw.com"
    ],
    orientation: "portrait",
  },
  {
    id: "004",
    title: "Call of Duty: Warzone",
    tech: "IW Engine, C++, DirectX",
    type: "Game",
    image: a4,
    description_sub: "Game battle royale với bản đồ lớn, cập nhật realtime vị trí người chơi.",
    description: "Warzone là game bắn súng sinh tồn, bản đồ rộng, nhiều chế độ chơi. Website mô phỏng bản đồ, vị trí người chơi realtime bằng Socket.io, UI động với React và style utility-first bằng Tailwind CSS.",
    gallery: [a4, a4, a4, a4, a4, a4, a4, a4, a4, a4],
    demoLinks: [
      "https://demo-server1.codmw.com"
    ],
    orientation: "landscape",
  },
  {
    id: "005",
    title: "Minecraft",
    tech: "Java, LWJGL, OpenGL",
    type: "Game",
    image: a5,
    description_sub: "Game sandbox 3D, mô phỏng xây dựng và khám phá thế giới khối vuông.",
    description: "Minecraft là game sáng tạo thế giới mở, xây dựng và sinh tồn. Website sử dụng Three.js và WebGL để render bản đồ 3D, Node.js backend để lưu trữ dữ liệu thế giới và người chơi.",
    gallery: [a5, a5, a5, a5, a5, a5, a5, a5, a5, a5],
    demoLinks: [
      "https://demo-server1.minecraft.net"
    ],
    orientation: "landscape",
  },
  {
    id: "006",
    title: "Fortnite",
    tech: "Unreal Engine, C++, Blueprint",
    type: "Game",
    image: a6,
    description_sub: "Game battle royale hoạt hình, giao diện hiện đại và chat realtime.",
    description: "Fortnite là game battle royale với đồ họa hoạt hình, nhiều sự kiện trực tuyến. Website mô phỏng giao diện lobby, bảng xếp hạng, và chat realtime bằng WebRTC, UI tối ưu SEO với Next.js và Styled Components.",
    gallery: [a6, a6, a6, a6, a6, a6, a6, a6, a6, a6],
    demoLinks: [
      "https://demo-server1.fortnite.com"
    ],
    orientation: "landscape",
  },
  {
    id: "007",
    title: "Roblox",
    tech: "Roblox Studio, Lua",
    type: "Game",
    image: a7,
    description_sub: "Nền tảng game đa dạng, cập nhật dữ liệu realtime và UI linh hoạt.",
    description: "Roblox là nền tảng cho phép người dùng tạo và chơi nhiều game khác nhau. Website mô phỏng giao diện Roblox Studio, cập nhật dữ liệu game realtime bằng Firebase và WebSocket, UI bằng React.",
    gallery: [a7, a7, a7, a7, a7, a7, a7, a7, a7, a7],
    demoLinks: [
      "https://demo-server1.roblox.com"
    ],
    orientation: "landscape",
  },
  {
    id: "008",
    title: "PUBG",
    tech: "Unreal Engine, C++, Blueprint",
    type: "Game",
    image: a8,
    description_sub: "Game bắn súng sinh tồn, bản đồ lớn, cập nhật realtime vị trí và trạng thái.",
    description: "PUBG là game battle royale, bản đồ rộng, gameplay chiến thuật. Website mô phỏng bản đồ, trạng thái trận đấu realtime bằng WebSocket, UI SPA với Angular và style tổ chức bằng SCSS.",
    gallery: [a8, a8, a8, a8, a8, a8, a8, a8, a8, a8],
    demoLinks: [
      "https://demo-server1.pubg.com"
    ],
    orientation: "landscape",
  },
  {
    id: "009",
    title: "Elden Ring",
    tech: "Custom Engine, C++, DirectX",
    type: "Game",
    image: a9,
    description_sub: "Game nhập vai thế giới mở, giao diện mô phỏng inventory và boss battle.",
    description: "Elden Ring là game nhập vai phiêu lưu, chiến đấu với boss mạnh. Website mô phỏng giao diện inventory, bản đồ, và trạng thái boss battle, sử dụng React cho UI, Bootstrap cho layout và REST API để lấy dữ liệu game.",
    gallery: [a9, a9, a9, a9, a9, a9, a9, a9, a9, a9],
    demoLinks: [
      "https://demo-server1.eldenring.com"
    ],
    orientation: "landscape",
  },
  {
    id: "010",
    title: "Apex Legends",
    tech: "Source Engine, C++, Python",
    type: "Game",
    image: a10,
    description_sub: "Game bắn súng đồng đội, cập nhật realtime trạng thái trận đấu.",
    description: "Apex Legends là game bắn súng đồng đội, nhân vật đa dạng. Website mô phỏng giao diện chọn nhân vật, cập nhật trạng thái trận đấu realtime bằng WebSocket, UI responsive với Vue và Tailwind CSS.",
    gallery: [a10, a10, a10, a10, a10, a10, a10, a10, a10, a10],
    demoLinks: [
      "https://demo-server1.apexlegends.com"
    ],
    orientation: "landscape",
  },
  // --- Website projects ---
  {
    id: "011",
    title: "Portfolio Developer",
    tech: "HTML, CSS, JS, React",
    type: "Website",
    image: a11,
    description_sub: "Website cá nhân giới thiệu kỹ năng, dự án, kinh nghiệm lập trình.",
    description: "Portfolio Developer là website cá nhân dành cho lập trình viên, hiển thị thông tin cá nhân, kỹ năng, kinh nghiệm, dự án nổi bật. Giao diện hiện đại, hiệu ứng chuyển động mượt mà với Framer Motion, responsive trên mọi thiết bị.",
    gallery: [a11, a11, a11, a11, a11, a11, a11, a11, a11, a11],
    demoLinks: [
      "https://portfolio-demo.devhouse.com"
    ],
  },
  {
    id: "012",
    title: "Ecommerce Shop",
    tech: "HTML, CSS, JS, Next.js",
    type: "Website",
    image: a12,
    description_sub: "Website thương mại điện tử, giỏ hàng, thanh toán online, responsive.",
    description: "Ecommerce Shop là website bán hàng trực tuyến, hỗ trợ tìm kiếm sản phẩm, lọc danh mục, giỏ hàng, thanh toán online qua Stripe API. Giao diện tối ưu SEO với Next.js, responsive bằng Tailwind CSS.",
    gallery: [a12, a12, a12, a12, a12, a12, a12, a12, a12, a12],
    demoLinks: [
      "https://ecommerce-demo.devhouse.com"
    ],
  },
  {
    id: "013",
    title: "Landing Page Product",
    tech: "HTML, CSS, JS",
    type: "Website",
    image: a13,
    description_sub: "Landing page giới thiệu sản phẩm, hiệu ứng chuyển động đẹp mắt.",
    description: "Landing Page Product là website giới thiệu sản phẩm, cung cấp thông tin, giá cả, đánh giá, call-to-action mạnh mẽ. Hiệu ứng chuyển động mượt mà với GSAP, dễ triển khai trên mọi nền tảng.",
    gallery: [a13, a13, a13, a13, a13, a13, a13, a13, a13, a13],
    demoLinks: [
      "https://landingpage-demo.devhouse.com"
    ],
  },
  {
    id: "014",
    title: "Blog Developer",
    tech: "HTML, CSS, JS, Gatsby",
    type: "Website",
    image: a14,
    description_sub: "Blog cá nhân chia sẻ kiến thức, viết bài bằng Markdown, truy vấn dữ liệu với GraphQL.",
    description: "Blog Developer là website blog cá nhân cho developer, chia sẻ kiến thức, cập nhật tin tức công nghệ. Gatsby giúp tạo trang tĩnh nhanh, nội dung viết bằng Markdown, truy vấn dữ liệu với GraphQL, tối ưu SEO.",
    gallery: [a14, a14, a14, a14, a14, a14, a14, a14, a14, a14],
    demoLinks: [
      "https://blog-demo.devhouse.com"
    ],
  },
  {
    id: "015",
    title: "Admin Dashboard",
    tech: "HTML, CSS, JS, React, Ant Design",
    type: "Website",
    image: a15,
    description_sub: "Bảng quản trị dữ liệu, quản lý người dùng, sản phẩm, báo cáo trực quan.",
    description: "Admin Dashboard là website quản trị, quản lý người dùng, sản phẩm, đơn hàng, báo cáo. Giao diện hiện đại với Ant Design, biểu đồ trực quan bằng Chart.js, tối ưu hiệu suất với React.",
    gallery: [a15, a15, a15, a15, a15, a15, a15, a15, a15, a15],
    demoLinks: [
      "https://admin-dashboard-demo.devhouse.com"
    ],
  },
  {
    id: "016",
    title: "Startup Homepage",
    tech: "HTML, CSS, JS, Vue.js, Vuetify",
    type: "Website",
    image: a1,
    description_sub: "Website giới thiệu startup, thông tin doanh nghiệp, tính năng sản phẩm.",
    description: "Startup Homepage là website dành cho doanh nghiệp khởi nghiệp, hiển thị thông tin công ty, tính năng sản phẩm, testimonial, call-to-action. UI đồng bộ với Vuetify, lấy dữ liệu động bằng Axios.",
    gallery: [a1, a1, a1, a1, a1, a1, a1, a1, a1, a1],
    demoLinks: [
      "https://startup-homepage-demo.devhouse.com"
    ],
  },
  {
    id: "017",
    title: "Restaurant Menu",
    tech: "HTML, CSS, JS, Angular, Bootstrap",
    type: "Website",
    image: a2,
    description_sub: "Website thực đơn nhà hàng, cập nhật món ăn, giá cả, đánh giá khách hàng.",
    description: "Restaurant Menu là website hiển thị thực đơn nhà hàng, danh mục món ăn, hình ảnh, giá cả, đánh giá khách hàng. UI responsive với Bootstrap, dữ liệu động từ Firebase, SPA với Angular.",
    gallery: [a2, a2, a2, a2, a2, a2, a2, a2, a2, a2],
    demoLinks: [
      "https://restaurant-menu-demo.devhouse.com"
    ],
  },
  {
    id: "018",
    title: "Real Estate Listing",
    tech: "HTML, CSS, JS, Next.js, MongoDB",
    type: "Website",
    image: a3,
    description_sub: "Website bất động sản, tìm kiếm, lọc khu vực, bản đồ tương tác.",
    description: "Real Estate Listing là website hiển thị danh sách nhà đất, cho thuê, mua bán. Hỗ trợ tìm kiếm, lọc khu vực, phân loại giá, bản đồ tương tác với Mapbox. Next.js xử lý SSR, MongoDB lưu trữ dữ liệu.",
    gallery: [a3, a3, a3, a3, a3, a3, a3, a3, a3, a3],
    demoLinks: [
      "https://realestate-listing-demo.devhouse.com"
    ],
  }
];
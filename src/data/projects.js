import df from '../assets/df.png'
import tt1 from '../assets/games/triple_tile/tt1.png'
import tt2 from '../assets/games/triple_tile/tt2.png'
import tt3 from '../assets/games/triple_tile/tt3.png'
import tt4 from '../assets/games/triple_tile/tt4.png'
import tt5 from '../assets/games/triple_tile/tt5.png'
import tt6 from '../assets/games/triple_tile/tt6.png'
import tt7 from '../assets/games/triple_tile/tt7.png'
import sk1 from '../assets/games/Soul_Knight/sk1.png'
import sk2 from '../assets/games/Soul_Knight/sk2.png'
import sk3 from '../assets/games/Soul_Knight/sk3.png'
import sk4 from '../assets/games/Soul_Knight/sk4.png'
import sk5 from '../assets/games/Soul_Knight/sk5.png'   
import sk6 from '../assets/games/Soul_Knight/sk6.png'
import sk7 from '../assets/games/Soul_Knight/sk7.png'
import sk8 from '../assets/games/Soul_Knight/sk8.png'
import sk9 from '../assets/games/Soul_Knight/sk9.png'
import sk10 from '../assets/games/Soul_Knight/sk10.png'
import cw1 from '../assets/games/chao_war/cw1.png'
import cw2 from '../assets/games/chao_war/cw2.png'
import cw3 from '../assets/games/chao_war/cw3.png'
import cw4 from '../assets/games/chao_war/cw4.png'
import cw5 from '../assets/games/chao_war/cw5.png'
import cw6 from '../assets/games/chao_war/cw6.png'
import cw7 from '../assets/games/chao_war/cw7.png'
import cw8 from '../assets/games/chao_war/cw8.png'    
import cw9 from '../assets/games/chao_war/cw9.png'
import cw10 from '../assets/games/chao_war/cw10.png'
import ms0 from '../assets/website/mvd_smart/ms0.png'
import ms1 from '../assets/website/mvd_smart/ms1.png'
import ms2 from '../assets/website/mvd_smart/ms2.png'
import ms3 from '../assets/website/mvd_smart/ms3.png'
import ms4 from '../assets/website/mvd_smart/ms4.png'
import ms5 from '../assets/website/mvd_smart/ms5.png'
import ms6 from '../assets/website/mvd_smart/ms6.png'

export const projects = [
  {
    id: "001",
    title: "Triple Tile",
    tech: "Unity, C#, Addressables",
    type: "Game",
    image: tt4,
    description_sub: "Game giải đố 3 tile thư giãn với thiết kế trực quan, hiệu ứng mượt và gameplay gây nghiện.",
    description: "Triple Tile là game giải đố match-3, nơi người chơi cần ghép 3 tile giống nhau để xóa chúng khỏi bàn cờ. Trò chơi mang lại cảm giác thư giãn nhờ hiệu ứng chuyển động mượt, âm thanh nhẹ nhàng, cùng hệ thống level và tile được quản lý linh hoạt bằng Addressables. Logic chơi được tối ưu để xử lý các tình huống lấp đầy, rollback và xếp tile thông minh.",
    gallery: [tt1, tt2, tt3, tt4, tt5, tt6, tt7],
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
    image: sk4,
    description_sub: "Trải nghiệm cuộc chiến chiến thuật từ góc nhìn top-down – xây dựng phòng thủ, triển khai kỹ năng theo thời gian thực với giao diện sống động và hiệu ứng mãn nhãn!",
    description: "Bước vào thế giới của những trận chiến chiến thuật đỉnh cao trong tựa game thủ thành góc nhìn top-down! Bạn sẽ vào vai anh hùng, xây dựng hệ thống phòng thủ vững chắc, bố trí đơn vị một cách thông minh và kích hoạt các kỹ năng đặc biệt theo thời gian thực để chống lại từng đợt tấn công dữ dội của kẻ thù.",
    gallery: [sk1, sk2, sk3, sk4, sk5, sk6, sk7, sk8, sk9, sk10],
    demoLinks: [
      "https://thedevhouse.shop/g3-soulknight/"
    ],
    orientation: "landscape",
  },
  {
    id: "003",
    title: "Chao War",
    tech: "Unity, C#, DOTween",
    type: "Game",
    image: cw8,
    description_sub: "Trải nghiệm cuộc chiến chiến thuật từ góc nhìn top-down – xây dựng phòng thủ, triển khai kỹ năng theo thời gian thực với giao diện sống động và hiệu ứng mãn nhãn!",
    description: "Bước vào thế giới của những trận chiến chiến thuật đỉnh cao trong tựa game thủ thành góc nhìn top-down! Bạn sẽ vào vai anh hùng, xây dựng hệ thống phòng thủ vững chắc, bố trí đơn vị một cách thông minh và kích hoạt các kỹ năng đặc biệt theo thời gian thực để chống lại từng đợt tấn công dữ dội của kẻ thù.",
    gallery: [cw1, cw2, cw3, cw4, cw5, cw6, cw7, cw8, cw9, cw10],
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
    image: df,
    description_sub: "Game battle royale với bản đồ lớn, cập nhật realtime vị trí người chơi.",
    description: "Warzone là game bắn súng sinh tồn, bản đồ rộng, nhiều chế độ chơi. Website mô phỏng bản đồ, vị trí người chơi realtime bằng Socket.io, UI động với React và style utility-first bằng Tailwind CSS.",
    gallery: [df, df, df, df, df, df, df, df, df, df],
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
    image: df,
    description_sub: "Game sandbox 3D, mô phỏng xây dựng và khám phá thế giới khối vuông.",
    description: "Minecraft là game sáng tạo thế giới mở, xây dựng và sinh tồn. Website sử dụng Three.js và WebGL để render bản đồ 3D, Node.js backend để lưu trữ dữ liệu thế giới và người chơi.",
    gallery: [df, df, df, df, df, df, df, df, df, df],
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
    image: df,
    description_sub: "Game battle royale hoạt hình, giao diện hiện đại và chat realtime.",
    description: "Fortnite là game battle royale với đồ họa hoạt hình, nhiều sự kiện trực tuyến. Website mô phỏng giao diện lobby, bảng xếp hạng, và chat realtime bằng WebRTC, UI tối ưu SEO với Next.js và Styled Components.",
    gallery: [df, df, df, df, df, df, df, df, df, df],
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
    image: df,
    description_sub: "Nền tảng game đa dạng, cập nhật dữ liệu realtime và UI linh hoạt.",
    description: "Roblox là nền tảng cho phép người dùng tạo và chơi nhiều game khác nhau. Website mô phỏng giao diện Roblox Studio, cập nhật dữ liệu game realtime bằng Firebase và WebSocket, UI bằng React.",
    gallery: [df, df, df, df, df, df, df, df, df, df],
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
    image: df,
    description_sub: "Game bắn súng sinh tồn, bản đồ lớn, cập nhật realtime vị trí và trạng thái.",
    description: "PUBG là game battle royale, bản đồ rộng, gameplay chiến thuật. Website mô phỏng bản đồ, trạng thái trận đấu realtime bằng WebSocket, UI SPA với Angular và style tổ chức bằng SCSS.",
    gallery: [df, df, df, df, df, df, df, df, df, df],
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
    image: df,
    description_sub: "Game nhập vai thế giới mở, giao diện mô phỏng inventory và boss battle.",
    description: "Elden Ring là game nhập vai phiêu lưu, chiến đấu với boss mạnh. Website mô phỏng giao diện inventory, bản đồ, và trạng thái boss battle, sử dụng React cho UI, Bootstrap cho layout và REST API để lấy dữ liệu game.",
    gallery: [df, df, df, df, df, df, df, df, df, df],
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
    image: df,
    description_sub: "Game bắn súng đồng đội, cập nhật realtime trạng thái trận đấu.",
    description: "Apex Legends là game bắn súng đồng đội, nhân vật đa dạng. Website mô phỏng giao diện chọn nhân vật, cập nhật trạng thái trận đấu realtime bằng WebSocket, UI responsive với Vue và Tailwind CSS.",
    gallery: [df, df, df, df, df, df, df, df, df, df],
    demoLinks: [
      "https://demo-server1.apexlegends.com"
    ],
    orientation: "landscape",
  },
  // --- Website projects ---
  {
    id: "011",
    title: "MVD Smart World - Thế giới di động",
    tech: "HTML, CSS, JS, React",
    type: "Website",
    image: ms0,
    description_sub: "Trang web bán điện thoại online với giao diện hiện đại, responsive, hiệu ứng mượt mà. Đầy đủ tính năng hiện đại",
    description: "MVD Smart World là trang web bán điện thoại, cung cấp thông tin sản phẩm, giỏ hàng, thanh toán online. Giao diện hiện đại, responsive với React, hiệu ứng mượt mà bằng Framer Motion. Tích hợp API để lấy dữ liệu sản phẩm và xử lý giỏ hàng.",
    gallery: [ms0, ms1, ms2, ms3, ms4, ms5, ms6,],
    demoLinks: [
      "https://thedevhouse.shop/w1-mobileapp/"
    ],
  },
  {
    id: "012",
    title: "Ecommerce Shop",
    tech: "HTML, CSS, JS, Next.js",
    type: "Website",
    image: df,
    description_sub: "Website thương mại điện tử, giỏ hàng, thanh toán online, responsive.",
    description: "Ecommerce Shop là website bán hàng trực tuyến, hỗ trợ tìm kiếm sản phẩm, lọc danh mục, giỏ hàng, thanh toán online qua Stripe API. Giao diện tối ưu SEO với Next.js, responsive bằng Tailwind CSS.",
    gallery: [df, df, df, df, df, df, df, df, df, df],
    demoLinks: [
      "https://ecommerce-demo.devhouse.com"
    ],
  },
  {
    id: "013",
    title: "Landing Page Product",
    tech: "HTML, CSS, JS",
    type: "Website",
    image: df,
    description_sub: "Landing page giới thiệu sản phẩm, hiệu ứng chuyển động đẹp mắt.",
    description: "Landing Page Product là website giới thiệu sản phẩm, cung cấp thông tin, giá cả, đánh giá, call-to-action mạnh mẽ. Hiệu ứng chuyển động mượt mà với GSAP, dễ triển khai trên mọi nền tảng.",
    gallery: [df],
    demoLinks: [
      "https://landingpage-demo.devhouse.com"
    ],
  },
  {
    id: "014",
    title: "Blog Developer",
    tech: "HTML, CSS, JS, Gatsby",
    type: "Website",
    image: df,
    description_sub: "Blog cá nhân chia sẻ kiến thức, viết bài bằng Markdown, truy vấn dữ liệu với GraphQL.",
    description: "Blog Developer là website blog cá nhân cho developer, chia sẻ kiến thức, cập nhật tin tức công nghệ. Gatsby giúp tạo trang tĩnh nhanh, nội dung viết bằng Markdown, truy vấn dữ liệu với GraphQL, tối ưu SEO.",
    gallery: [df, df, df, df, df, df, df, df, df, df],
    demoLinks: [
      "https://blog-demo.devhouse.com"
    ],
  },
  {
    id: "015",
    title: "Admin Dashboard",
    tech: "HTML, CSS, JS, React, Ant Design",
    type: "Website",
    image: df,
    description_sub: "Bảng quản trị dữ liệu, quản lý người dùng, sản phẩm, báo cáo trực quan.",
    description: "Admin Dashboard là website quản trị, quản lý người dùng, sản phẩm, đơn hàng, báo cáo. Giao diện hiện đại với Ant Design, biểu đồ trực quan bằng Chart.js, tối ưu hiệu suất với React.",
    gallery: [df, df, df, df, df, df, df, df, df, df],
    demoLinks: [
      "https://admin-dashboard-demo.devhouse.com"
    ],
  },
  {
    id: "016",
    title: "Startup Homepage",
    tech: "HTML, CSS, JS, Vue.js, Vuetify",
    type: "Website",
    image: df,
    description_sub: "Website giới thiệu startup, thông tin doanh nghiệp, tính năng sản phẩm.",
    description: "Startup Homepage là website dành cho doanh nghiệp khởi nghiệp, hiển thị thông tin công ty, tính năng sản phẩm, testimonial, call-to-action. UI đồng bộ với Vuetify, lấy dữ liệu động bằng Axios.",
    gallery: [df],
    demoLinks: [
      "https://startup-homepage-demo.devhouse.com"
    ],
  },
  {
    id: "017",
    title: "Restaurant Menu",
    tech: "HTML, CSS, JS, Angular, Bootstrap",
    type: "Website",
    image: df,
    description_sub: "Website thực đơn nhà hàng, cập nhật món ăn, giá cả, đánh giá khách hàng.",
    description: "Restaurant Menu là website hiển thị thực đơn nhà hàng, danh mục món ăn, hình ảnh, giá cả, đánh giá khách hàng. UI responsive với Bootstrap, dữ liệu động từ Firebase, SPA với Angular.",
    gallery: [df],
    demoLinks: [
      "https://restaurant-menu-demo.devhouse.com"
    ],
  },
  {
    id: "018",
    title: "Real Estate Listing",
    tech: "HTML, CSS, JS, Next.js, MongoDB",
    type: "Website",
    image: df,
    description_sub: "Website bất động sản, tìm kiếm, lọc khu vực, bản đồ tương tác.",
    description: "Real Estate Listing là website hiển thị danh sách nhà đất, cho thuê, mua bán. Hỗ trợ tìm kiếm, lọc khu vực, phân loại giá, bản đồ tương tác với Mapbox. Next.js xử lý SSR, MongoDB lưu trữ dữ liệu.",
    gallery: [df],
    demoLinks: [
      "https://realestate-listing-demo.devhouse.com"
    ],
  }
];
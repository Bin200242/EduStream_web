$(document).ready(function() {
    

    const dbData = {
        courses: [
            { 
                id: "html-css-js", 
                title: "Lập trình Web với HTML, CSS, JavaScript", 
                meta: "Giảng viên: Nguyễn Văn A", 
                price: "599.000đ", 
                oldPrice: "799.000đ",
                icon: "🌐",
                benefits: [
                    "Xây dựng giao diện web Responsive chuẩn thiết kế hiện đại.",
                    "Hiểu sâu về cấu trúc HTML5 và các thuộc tính nâng cao của CSS3.",
                    "Tạo hiệu ứng tương tác, xử lý logic sự kiện bằng JavaScript.",
                    "Tự phát triển dự án Landing Page cá nhân hoàn chỉnh."
                ]
            },
            { 
                id: "python-core", 
                title: "Python cơ bản cho người mới bắt đầu", 
                meta: "Giảng viên: Trần Thị B", 
                price: "499.000đ", 
                oldPrice: "1.000.000đ",
                icon: "🐍",
                benefits: [
                    "Nắm vững cú pháp Python, các kiểu dữ liệu và tư duy thuật toán căn bản.",
                    "Thành thạo kỹ thuật xử lý file, cấu trúc dữ liệu nâng cao (List, Dict, Tuple).",
                    "Làm quen và áp dụng lập trình hướng đối tượng (OOP) vào dự án.",
                    "Xây dựng các công cụ tự động hóa (Automation) và cào dữ liệu từ Website thực tế."
                ]
            },
            { 
                id: "java-pro", 
                title: "Java thực chiến cho người đi làm", 
                meta: "Giảng viên: Lê Văn C", 
                price: "699.000đ", 
                oldPrice: "999.000đ",
                icon: "☕",
                benefits: [
                    "Làm chủ ngôn ngữ Java Core và các tính năng nâng cấp từ Java 8 đến nay.",
                    "Thấu hiểu sâu sắc tư duy OOP, các Design Patterns phổ biến và xử lý đa luồng.",
                    "Kết nối, truy vấn và tối ưu hóa cơ sở dữ liệu hệ thống thông qua JDBC, Hibernate/JPA.",
                    "Xây dựng nền tảng tư duy tốt chuẩn bị cho việc phát triển Spring Boot Framework."
                ]
            },
            { 
                id: "reactjs-adv", 
                title: "ReactJS từ cơ bản đến nâng cao", 
                meta: "Giảng viên: Phạm Văn D", 
                price: "599.000đ", 
                oldPrice: "899.000đ",
                icon: "⚛️",
                benefits: [
                    "Làm chủ tư duy chia Component và quản lý State (useState, useEffect, Hooks hệ thống).",
                    "Thành thạo các giải pháp quản lý trạng thái toàn cục phức tạp như Redux Toolkit hoặc Context API.",
                    "Tối ưu hóa tốc độ tải và hiệu năng hoạt động của Single Page Application.",
                    "Tự xây dựng một ứng dụng Web App thương mại kết nối trực tiếp với hệ thống RESTful API."
                ]
            }
        ],
        teachers: [
            { name: "Nguyễn Văn A", role: "Chuyên gia Web Fullstack - 10 năm kinh nghiệm", icon: "👨‍💻" },
            { name: "Trần Thị B", role: "Chuyên gia Khoa học dữ liệu & Machine Learning", icon: "👩‍💻" },
            { name: "Lê Văn C", role: "Kiến trúc sư hệ thống Java Enterprise", icon: "👨‍💼" },
            { name: "Phạm Văn D", role: "Kỹ sư phát triển ứng dụng di động Mobile App", icon: "👨‍🏫" }
        ]
    };
    
    function dieuHuongChiTiet(courseObj) {
        let title = courseObj.title;
        let ins = courseObj.meta.includes(': ') ? courseObj.meta.split(': ')[1] : courseObj.meta;
        let price = courseObj.price;
        let oldPrice = courseObj.oldPrice;
        let benefitsStr = JSON.stringify(courseObj.benefits);

        window.location.href = `chi_tiet_khoa_hoc.html?title=${encodeURIComponent(title)}&ins=${encodeURIComponent(ins)}&price=${encodeURIComponent(price)}&old=${encodeURIComponent(oldPrice)}&benefits=${encodeURIComponent(benefitsStr)}`;
    }

    $('#global-search-input').on('input', function() {
        let query = $(this).val().trim().toLowerCase();
        let $resultBox = $('#search-live-results');
        
        if (query.length === 0) {
            $resultBox.hide().empty();
            return;
        }

        let matchedCourses = dbData.courses.filter(c => c.title.toLowerCase().includes(query) || c.meta.toLowerCase().includes(query));
        let matchedTeachers = dbData.teachers.filter(t => t.name.toLowerCase().includes(query) || t.role.toLowerCase().includes(query));

        if (matchedCourses.length === 0 && matchedTeachers.length === 0) {
            $resultBox.html('<p style="color:#999; font-size:14px; text-align:center; padding:10px 0;">Không tìm thấy kết quả nào...</p>').show();
            return;
        }

        let htmlResult = '';

        if (matchedCourses.length > 0) {
            htmlResult += '<div class="search-group-title">Khóa học tìm thấy</div>';
            matchedCourses.forEach(c => {
                htmlResult += `
                    <div class="search-item course-result-item" data-id="${c.id}">
                        <div class="search-item-img">${c.icon}</div>
                        <div class="search-item-info">
                            <h4>${c.title}</h4>
                            <p>${c.meta} • <span style="color:#007BFF; font-weight:bold;">${c.price}</span></p>
                        </div>
                    </div>`;
            });
        }

        if (matchedTeachers.length > 0) {
            htmlResult += '<div class="search-group-title">Giảng viên tìm thấy</div>';
            matchedTeachers.forEach(t => {
                htmlResult += `
                    <div class="search-item teacher-result-item">
                        <div class="search-item-img">${t.icon}</div>
                        <div class="search-item-info">
                            <h4>${t.name}</h4>
                            <p>${t.role}</p>
                        </div>
                    </div>`;
            });
        }

        $resultBox.html(htmlResult).show();
    });

    $(document).on('click', '.course-result-item', function() {
        let courseId = $(this).data('id');
        let matchedCourse = dbData.courses.find(c => c.id === courseId);
        if (matchedCourse) {
            dieuHuongChiTiet(matchedCourse);
        }
    });

    $(document).on('click', function(e) {
        if (!$(e.target).closest('.search-container').length) {
            $('#search-live-results').hide();
        }
    });

    $('nav a[data-target]').on('click', function(e) {
        let targetSelector = $(this).data('target');
        
        if (window.location.pathname.indexOf('chi_tiet_khoa_hoc.html') !== -1 || window.location.pathname.includes('_page') || window.location.pathname.includes('list') || window.location.pathname.includes('path')) {
            window.location.href = 'trang_chu.html' + targetSelector;
            return;
        }

        if ($(targetSelector).length) {
            e.preventDefault();
            let offsetTop = $(targetSelector).offset().top - 80; 
            $('html, body').animate({ scrollTop: offsetTop }, 600);
        }
    });

    
    if (window.location.hash) {
        let hashTarget = window.location.hash;
        if ($(hashTarget).length) {
            setTimeout(function() {
                let offsetTop = $(hashTarget).offset().top - 80;
                $('html, body').animate({ scrollTop: offsetTop }, 600);
            }, 300);
        }
    }

    $('.faq-question').on('click', function() {
        let $answer = $(this).next('.faq-answer');
        $('.faq-answer').not($answer).slideUp(200); 
        $answer.slideToggle(200);
    });

    if (window.location.pathname.indexOf('chi_tiet_khoa_hoc.html') !== -1) {
        let urlParams = new URLSearchParams(window.location.search);
        
        if (urlParams.has('title')) $('#det-title').text(urlParams.get('title'));
        if (urlParams.has('ins')) $('#det-instructor').text(urlParams.get('ins'));
        if (urlParams.has('price')) $('#det-price').text(urlParams.get('price'));
        if (urlParams.has('old')) $('#det-oldprice').text(urlParams.get('old'));

        if (urlParams.has('benefits')) {
            try {
                let benefitsArray = JSON.parse(urlParams.get('benefits'));
                if (Array.isArray(benefitsArray) && benefitsArray.length > 0) {
                    let $benefitsList = $('#det-benefits');
                    $benefitsList.empty();
                    
                    benefitsArray.forEach(function(item) {
                        $benefitsList.append(`<li>${item}</li>`);
                    });
                }
            } catch (error) {
                console.error("Lỗi đồng bộ cấu trúc dữ liệu mảng 'benefits':", error);
            }
        }
    }

    $('.course-card').on('click', function() {
        let courseTitle = $(this).find('h3').text().trim();
        
        let matchedCourse = dbData.courses.find(c => c.title.toLowerCase() === courseTitle.toLowerCase());
        
        if (matchedCourse) {
            dieuHuongChiTiet(matchedCourse);
        } else {
            
            let instructor = $(this).find('.instructor').text().trim();
            let price = $(this).find('.price').html().split('<')[0].trim();
            let oldPrice = $(this).find('.old-price').text().trim() || $(this).find('del').text().trim() || "";
            window.location.href = `chi_tiet_khoa_hoc.html?title=${encodeURIComponent(courseTitle)}&ins=${encodeURIComponent(instructor)}&price=${encodeURIComponent(price)}&old=${encodeURIComponent(oldPrice)}&benefits=`;
        }
    });
});

let dsAnh = [
    "asset/C++.jpg",
    "asset/python.jpg",
    "asset/JS.jpg",
];

let index = 0;

setInterval(function () {
    index++;
    if (index >= dsAnh.length) {
        index = 0;
    }

    $(".hero-image img").animate(
        {
            marginLeft: "-100%",
            opacity: 0
        },
        700,
        function () {
            $(this)
                .attr("src", dsAnh[index])
                .css({
                    marginLeft: "100%",
                    opacity: 0
                })
                .animate({
                    marginLeft: "0%",
                    opacity: 1
                }, 700);
        }
    );
}, 3000);
---
id: c1-w1
title: SOC Foundamentals
sidebar_position: 2
---

Nè nè, mọi người biết gì hong? Khóa học này quá đỉnh lun! Tại sao ư? Tại vì mọi người có thể tìm hiểu về quy trình làm việc và hệ thống như trong một doanh nghiệp thật sự vậy. Lúc tôi và cậu ấy biết được cũng bất ngờ lắm, trước giờ cứ thắc mắc mãi thôi ~ ehehe. Chà, những người tuyệt vời đã tạo ra trang web này rất tận tâm rồi, 2 chúng tôi cũng phải cố gắng học mới được! À phải, ngoài ra họ còn cho một [playlist](https://open.spotify.com/playlist/0G35948whLbeCBjHjIAIES?si=daa3f1bd77ff4166) trên Spotify để vừa nghe vừa học á, chu đáo ghê chưa~

> "Lúc trước ai giới thiệu trang web cho tụi mình ấy nhỉ?" - Cậu ấy hỏi \
> "Hmmm... Tớ quên mất rồi :v" - Tôi nói \
> "Nhưng mà rất biết ơn họ, nhỉ?" - Chúng tôi đồng thanh

- [📌 Tổng Quan Khóa Học SOC Analyst Learning Path (LetsDefend)](#-tổng-quan-khóa-học-soc-analyst-learning-path-letsdefend)
  - [🏢 Giới Thiệu về SOC](#-giới-thiệu-về-soc)
    - [🎯 Bạn sẽ học được:](#-bạn-sẽ-học-được)
  - [🔹 Các Loại Mô Hình SOC](#-các-loại-mô-hình-soc)
  - [👨‍💻 Vai Trò trong SOC](#-vai-trò-trong-soc)
  - [🔍 SIEM và Mối Quan Hệ với SOC Analyst](#-siem-và-mối-quan-hệ-với-soc-analyst)
  - [📜 Quản Lý Log (Log Management)](#-quản-lý-log-log-management)
  - [🖥️ EDR - Endpoint Detection and Response](#️-edr---endpoint-detection-and-response)
  - [🤖 SOAR - Security Orchestration Automation and Response](#-soar---security-orchestration-automation-and-response)
  - [🌍 Threat Intelligence Feed](#-threat-intelligence-feed)
  - [❌ Những Sai Lầm Phổ Biến của SOC Analyst](#-những-sai-lầm-phổ-biến-của-soc-analyst)
  - [🎯 Kết Luận](#-kết-luận)

# 📌 Tổng Quan Khóa Học SOC Analyst Learning Path (LetsDefend)

## 🏢 Giới Thiệu về SOC

Security Operations Center (SOC) là trung tâm bảo mật nơi các chuyên gia giám sát, phân tích và phản ứng với các mối đe dọa an ninh mạng. Khóa học này giúp bạn hiểu về cấu trúc, hoạt động của SOC cũng như cách sử dụng các công cụ SOC.

### 🎯 Bạn sẽ học được:

- Cấu trúc và vận hành của SOC
- Các công cụ SOC phổ biến
- Cách sử dụng hiệu quả các công cụ SOC
- Những sai lầm thường gặp của SOC Analyst

---

## 🔹 Các Loại Mô Hình SOC

1. **In-house SOC**: Đội ngũ bảo mật nội bộ của tổ chức.
2. **Virtual SOC**: Nhóm SOC hoạt động từ xa.
3. **Co-Managed SOC**: Kết hợp giữa SOC nội bộ và dịch vụ bảo mật bên ngoài.
4. **Command SOC**: Điều phối nhiều SOC nhỏ hơn, thường sử dụng trong tổ chức lớn.

🔹 **Nhân sự, Quy trình và Công nghệ** đóng vai trò quan trọng trong vận hành SOC.

---

## 👨‍💻 Vai Trò trong SOC

- **SOC Analyst**: Phân tích cảnh báo, xác định mối đe dọa.
- **Incident Responder**: Phản ứng với sự cố bảo mật.
- **Threat Hunter**: Tìm kiếm các mối đe dọa ẩn.
- **Security Engineer**: Xây dựng, duy trì hệ thống bảo mật.
- **SOC Manager**: Quản lý nhân sự, ngân sách, chiến lược SOC.

---

## 🔍 SIEM và Mối Quan Hệ với SOC Analyst

**SIEM (Security Information and Event Management)** giúp giám sát, ghi lại và phát hiện các mối đe dọa bảo mật.

🔹 **SOC Analyst cần làm gì?**

- Theo dõi cảnh báo SIEM.
- Xác định xem cảnh báo có phải là mối đe dọa thực sự hay không.
- Sử dụng các công cụ khác như **EDR, Log Management, Threat Intelligence** để điều tra sâu hơn.

📌 **Ví dụ**: Nếu có 20 lần nhập sai mật khẩu trong 10 giây, SIEM có thể phát hiện đó là một cuộc tấn công brute-force.

---

## 📜 Quản Lý Log (Log Management)

Hệ thống **Log Management** giúp SOC Analyst:

- Xem tất cả các logs từ hệ thống (firewall, OS, proxy...)
- Phân tích các kết nối đáng ngờ và truy vết hành vi tấn công.

📌 **Ví dụ**: Nếu phát hiện một IP đáng ngờ, SOC Analyst cần kiểm tra log để xem có thiết bị nào trong hệ thống từng kết nối đến IP đó hay không.

---

## 🖥️ EDR - Endpoint Detection and Response

🔹 **EDR giúp gì?**

- Theo dõi hành vi endpoint theo thời gian thực.
- Hỗ trợ phân tích lịch sử truy cập, kết nối mạng, danh sách tiến trình.
- Cách ly thiết bị nhiễm mã độc để ngăn chặn lây lan.

📌 **Mẹo nhanh**: Nếu có hash của một tệp đáng ngờ, hãy quét EDR để xem có thiết bị nào khác bị nhiễm không.

---

## 🤖 SOAR - Security Orchestration Automation and Response

🔹 **SOAR giúp SOC Analyst tiết kiệm thời gian bằng cách tự động hóa:**

- Kiểm tra danh tiếng IP.
- Tra cứu hash file độc hại.
- Phân tích file trong môi trường sandbox.

📌 **Ví dụ**: Khi có cảnh báo SIEM, SOAR có thể tự động tra cứu VirusTotal để kiểm tra IP nguồn.

---

## 🌍 Threat Intelligence Feed

Threat Intelligence cung cấp dữ liệu về các mối đe dọa hiện có như:

- **Malware hashes**
- **C2 (Command & Control) IPs**

📌 **Nguồn miễn phí hữu ích**:

- [VirusTotal](https://www.virustotal.com)
- [Talos Intelligence](https://talosintelligence.com)

**Lưu ý:** Một IP có thể từng được sử dụng để tấn công nhưng hiện tại có thể đã đổi chủ. Hãy phân tích kỹ trước khi kết luận.

---

## ❌ Những Sai Lầm Phổ Biến của SOC Analyst

1. **Quá phụ thuộc vào VirusTotal**: Không phải lúc nào VirusTotal cũng phát hiện malware.
2. **Phân tích malware quá nhanh trong sandbox**: Một số malware có thể nhận diện môi trường sandbox và không kích hoạt ngay.
3. **Bỏ sót log quan trọng**: Cần kiểm tra log trên toàn hệ thống, không chỉ trên một thiết bị.
4. **Không chú ý đến thời gian quét trên VirusTotal**: Kết quả cũ có thể không phản ánh đúng tình trạng hiện tại.

---

## 🎯 Kết Luận

Khóa học cung cấp kiến thức nền tảng về SOC, vai trò của SOC Analyst và các công cụ quan trọng như SIEM, EDR, SOAR, Threat Intelligence. Tránh các sai lầm phổ biến sẽ giúp bạn trở thành một SOC Analyst chuyên nghiệp!

🔹 **Hãy tiếp tục thực hành để nâng cao kỹ năng!** 🚀

function Footer({ ...props }) {
  return (
    <div w3-include-footer="footer.html">
      <footer data-role="footer">
        <h1>Footer Componet</h1>
      </footer>
    </div>
  );
}

export default Footer; // React.memo()는 props 미변경시 컴포넌트 리렌더링 방지 설정

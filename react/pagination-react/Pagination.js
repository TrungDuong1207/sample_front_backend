export default function Pagination() {
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(5);
    const totalPages = Math.ceil(selectedProducts.length / perPage);
    const [inputPageRight, setInputPageRight] = useState(false);
    const [inputPageLeft, setInputPageLeft] = useState(false);
    const [ellipsisRight, setEllipsisRight] = useState(true);
    const [ellipsisLeft, setEllipsisLeft] = useState(true);
    const [inputPageValue, setInputPageValue] = useState("");
    const start = (currentPage - 1) * perPage;
    const end = start + perPage;

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handleGoToPage = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
            setInputPageRight(false);
            setInputPageLeft(false)
            setEllipsisRight(true);
            setEllipsisLeft(true);
            setInputPageValue("");
        } else if (pageNumber < 1) {
            setCurrentPage(1);
        } else {
            setCurrentPage(totalPages);
        }
    };

// hiển thi sản phẩm
    const productBanners = selectedProducts.slice(start, end).map((item) => {
        let proItem = dynamicProductListMap.get(item);
        if (proItem) {
          const media = (
            <Thumbnail
              source={proItem.featuredImage ? proItem.featuredImage.transformedSrc : placeholder}
              alt={proItem.title}
            />
          );
          return (
            <Banner title={proItem.title} key={"product-banner-" + proItem.id} onDismiss={() => handleOnDismiss(proItem.id)}>
              {media}
            </Banner>
          );
        }
    
        return "";
    });

    return (
        <>
            <div className={"bss-bcp-selected-products"}>
                {productBanners}
            </div>
            {
                selectedProducts.length > 5 &&
                <div className="bss-bcp-pagination">
                    <button className="bss-bcp-pagination-btn" onClick={prevPage} disabled={currentPage === 1}>
                        <Icon source={ChevronLeftMinor} color={currentPage === 1 ? "base" : null} />
                    </button>
                    {
                        totalPages > 7 ? (
                            <>
                                <button onClick={() => handleGoToPage(1)} className={`page-btn ${currentPage === 1 ? 'act' : ''}`}>1</button>
                                {currentPage > 3 && inputPageLeft &&
                                        <input
                                            type="number"
                                            value={inputPageValue}
                                            onChange={(e) => setInputPageValue(e.target.value)}
                                            onKeyDown={(e) => {
                                                if (e.key === "Enter") {
                                                    handleGoToPage(parseInt(inputPageValue));
                                                }
                                            }}
                                            onBlur={() => {setInputPageLeft(false); setEllipsisLeft(true)}}
                                        />
                                }
                                {currentPage > 3 && ellipsisLeft &&
                                    <span className="bss-bcp-ellipsis" onClick={() => {setInputPageLeft(true); setEllipsisLeft(false)}}>...</span>
                                }
                                {Array.from({ length: 5 }).map((_, index) => {
                                    const pageIndex =
                                        currentPage > 2
                                            ? currentPage - 1 + index
                                            : index + 2;

                                    return pageIndex < totalPages && pageIndex > 0 ? (
                                        <button
                                            key={pageIndex}
                                            onClick={() => handleGoToPage(pageIndex)}
                                            className={
                                                `page-btn ${pageIndex === currentPage ? "act" : ""}`
                                            }
                                        >
                                            {pageIndex}
                                        </button>
                                    ) : null;
                                })}
                                {currentPage < totalPages - 4 && ellipsisRight &&
                                    <span className="bss-bcp-ellipsis" onClick={() => {setInputPageRight(true); setEllipsisRight(false)}}>...</span>
                                }
                                {currentPage < totalPages - 4 && inputPageRight &&
                                        <input
                                            type="number"
                                            value={inputPageValue}
                                            onChange={(e) => setInputPageValue(e.target.value)}
                                            onKeyDown={(e) => {
                                                if (e.key === "Enter") {
                                                    handleGoToPage(parseInt(inputPageValue));
                                                }
                                            }}
                                            onBlur={() => {setInputPageRight(false); setEllipsisRight(true)}}
                                        />
                                }
                                <button onClick={() => handleGoToPage(totalPages)} className={`page-btn ${currentPage === totalPages ? 'act' : ''}`}>
                                    {totalPages}
                                </button>
                            </>
                        ) : (
                            Array.from({ length: totalPages }).map((_, index) => {
                                const pageIndex = index + 1;

                                return (
                                    <button
                                        key={pageIndex}
                                        onClick={() => handleGoToPage(pageIndex)}
                                        className={
                                            `page-btn ${pageIndex === currentPage ? "act" : ""}`
                                        }
                                    >
                                        {pageIndex}
                                    </button>
                                );
                            })
                        )
                    }

                    <button className="bss-bcp-pagination-btn" onClick={nextPage} disabled={currentPage === totalPages}>
                        <Icon source={ChevronRightMinor} color={currentPage === totalPages ? "base" : null} />
                    </button>
                </div>
            }

        </>
    );

}
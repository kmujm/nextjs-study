import ContentCommon from "../../components/Common/ContentCommon";
import Table from "../../components/Memebers/Table";
import TableCell from "../../components/Memebers/TableCell";

export default function Members() {
    const mockupData = [
                        {"type" : "차주", "memberNum" : "10", "joinDate": "19/11/11 16:10", "name": "김인수", "phone" : "010-1234-5678",
                        "businessName": "한국카캐리어", "businessNumber" : "123-12-12345", "carInfo": "full tailer"},
                        {"type" : "차주", "memberNum" : "10", "joinDate": "19/11/11 16:10", "name": "김인수", "phone" : "010-1234-5678",
                        "businessName": "한국카캐리어", "businessNumber" : "123-12-12345", "carInfo": "full tailer"},
                    ];
    return (
        <>
            {/* <!-- CONTENT --> */}
            <ContentCommon>
              {/* <!-- 필터 --> */}
                    <div className="filter_area">
                    <div className="common_search_form_area filter_group_area">
                        {/* <!-- input: select --> */}
                        <div className="input_area">
                        <label htmlFor="input_select" className="input_label hide">항목 이름</label>
                        <select className="input_text type_select" id="input_select">
                            <option selected>전체</option>
                            <option>옵션1</option>
                            <option>옵션2</option>
                        </select>
                        </div>
                        {/* <!-- input: date --> */}
                        <div className="input_area">
                        <label htmlFor="input_date" className="hide">검색 기준 시작일</label>
                        <input type="text" className="input_text type_date" id="input_date" value="2022.06.01." readOnly />
                        <span className="period">~</span>
                        <label htmlFor="input_date2" className="hide">검색 기준 종료일</label>
                        <input type="text" className="input_text type_date" id="input_date2" value="2022.06.30." readOnly />
                        </div>
                            {/* <!-- input: keyword search and button --> */}
                            <div className="input_area">
                            <label htmlFor="input_keyword" className="hide">검색어</label>
                            <input type="text" className="input_text type_search" id="input_keyword" placeholder="검색어 입력" />
                            <button type="button" className="input_btn">
                                <i className="bi bi-search"></i>
                                <span className="hide">검색</span>
                            </button>
                            </div>
                        </div>
                        <div className="common_search_form_area filter_group_area">
                            {/* <!-- input: radio, checkbox --> */}
                            <div className="input_area">
                            <span className="input_radio_checkbox_item">
                                <input type="radio" className="input_radio" id="input_radio1" name="input_radio_name" checked />
                                <label htmlFor="input_radio1" className="input_label">라디오1</label>
                            </span>
                            <span className="input_radio_checkbox_item">
                                <input type="radio" className="input_radio" id="input_radio2" name="input_radio_name" />
                                <label htmlFor="input_radio2" className="input_label">라디오2</label>
                            </span>
                            <span className="input_radio_checkbox_item">
                                <input type="radio" className="input_radio" id="input_radio3" name="input_radio_name" />
                                <label htmlFor="input_radio3" className="input_label">라디오3</label>
                            </span>

                            <span className="input_radio_checkbox_item">
                                <input type="checkbox" className="input_checkbox" id="input_checkbox1" />
                                <label htmlFor="input_checkbox1" className="input_label">체크박스1</label>
                            </span>
                            <span className="input_radio_checkbox_item">
                                <input type="checkbox" className="input_checkbox" id="input_checkbox2" />
                                <label htmlFor="input_checkbox2" className="input_label">체크박스2</label>
                            </span>
                            <span className="input_radio_checkbox_item">
                                <input type="checkbox" className="input_checkbox" id="input_checkbox3" />
                                <label htmlFor="input_checkbox3" className="input_label">체크박스3</label>
                            </span>
                            </div>
                            {/* <!-- input: button --> */}
                            <div className="input_area">
                            <button type="button" className="input_btn">버튼1</button>
                            <button type="button" className="input_btn">버튼2</button>
                            </div>
                        </div>
                        </div>
                        {/* <!-- 목록 --> */}
                        <Table>
                            <caption className="hide">
                            목록 제목
                            </caption>
                            <TableCell datas={mockupData}/>                         
                            </Table>
                        {/* <!-- 공통 페이징 --> */}
                        <div className="common_paginate_area">
                        <a href="" className="btn type_direction type_first">
                            <i className="bi bi-chevron-double-left"></i>
                            <span className="hide">맨 처음 페이지</span>
                        </a>
                        <a href="" className="btn type_direction type_prev">
                            <i className="bi bi-chevron-left"></i>
                            <span className="hide">이전 페이지</span>
                        </a>
                        {/* <!-- 현재 페이지인 경우 active 클래스 추가 --> */}
                        <a href="" className="btn active">1</a>
                        <a href="" className="btn">2</a>
                        <a href="" className="btn">3</a>
                        <a href="" className="btn">4</a>
                        <a href="" className="btn">5</a>
                        <a href="" className="btn type_direction type_next">
                            <i className="bi bi-chevron-right"></i>
                            <span className="hide">다음 페이지</span>
                        </a>
                        <a href="" className="btn type_direction type_last">
                            <i className="bi bi-chevron-double-right"></i>
                            <span className="hide">맨 끝 페이지</span>
                        </a>
                        </div>
                        {/* <!-- DLL 페이징 --> */}
                        <span className="paging">
                        <a>`${'<<'}`</a>
                        <a>`{'<'}`</a>
                        <a>1</a>
                        <a>2</a>
                        <a href="">3</a>
                        <a href="">4</a>
                        <a href="">5</a>
                        <a href="">`{'>'}`</a>
                        <a href="">`{'>>'}`</a>
                        </span>
      </ContentCommon>        
        </>
    );
}
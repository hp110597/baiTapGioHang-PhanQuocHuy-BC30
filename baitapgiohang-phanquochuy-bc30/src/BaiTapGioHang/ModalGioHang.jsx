import React, { Component } from "react";

export default class ModalGioHang extends Component {
  render() {
    const { gioHang, xoaGioHang, tangGiamSoLuong } = this.props;

    return (
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div
            className="modal-content"
            style={{ maxWidth: "800px", width: "800px" }}
          >
            <div className="modal-header">
              <h5 className="modal-title">Giỏ hàng</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <td>Mã SP</td>
                    <td>Hình ảnh</td>
                    <td>Tên SP</td>
                    <td>Số lượng</td>
                    <td>Đơn giá</td>
                    <td>Thành tiền</td>
                    <td></td>
                  </tr>
                </thead>
                <tbody>
                  {gioHang.map((spGH, index) => {
                    return (
                      <tr key={index}>
                        <td>{spGH.maSP}</td>
                        <td>
                          <img src={spGH.hinhAnh} width={50} height={75} />
                        </td>
                        <td>{spGH.tenSP}</td>
                        <td>
                          <button
                            className="btn btn-primary"
                            onClick={() => tangGiamSoLuong(spGH.maSP, true)}
                          >
                            +
                          </button>
                          {spGH.soLuong}
                          <button
                            className="btn btn-primary"
                            onClick={() => tangGiamSoLuong(spGH.maSP, false)}
                          >
                            -
                          </button>
                        </td>
                        <td>{spGH.giaBan}</td>
                        <td>{spGH.soLuong * spGH.giaBan}</td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => xoaGioHang(spGH.maSP)}
                          >
                            Xóa
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

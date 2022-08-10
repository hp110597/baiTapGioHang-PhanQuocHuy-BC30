import React, { Component } from "react";
import DanhSachSanPham from "./DanhSachSanPham";
import ModalGioHang from "./ModalGioHang";
import phoneData from "../data/phoneData.json";

export default class BaiTapGioHang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gioHang: [
        // {
        //   maSP: 1,
        //   tenSP: "VinSmart Live",
        //   giaBan: 5700000,
        //   hinhAnh: "./img/vsphone.jpg",
        //   soLuong: 1,
        // },
      ],
    };
  }

  //Laáy dữ liệu tại component BaiTapGioHang
  themGioHang = (sanPhamChon) => {
    // Bước 1: từ sp đc chọn tạo ra sp giỏ hàng
    let spGioHang = {
      maSP: sanPhamChon.maSP,
      tenSP: sanPhamChon.tenSP,
      giaBan: sanPhamChon.giaBan,
      hinhAnh: sanPhamChon.hinhAnh,
      soLuong: 1,
    };
    var gioHangCapNhap = [...this.state.gioHang]
    let index =gioHangCapNhap.findIndex(sp=> sp.maSP === spGioHang.maSP)

    if(index!==-1){
      gioHangCapNhap[index].soLuong+=1
    }else{
      gioHangCapNhap.push(spGioHang)
    }
    this.setState({
      gioHang:gioHangCapNhap
    })
    // console.log(this.state.gioHang);
  };
  

  //Đặt sự kiện xóa giỏ hàng tại BTGioHang

  xoaGioHang = (maSP) =>{
    // var gioHangCapNhap=[...this.state.gioHang]
    // let index = gioHangCapNhap.findIndex(sp=>sp.maSP===maSP)
    // if(index!==-1)
    // {
    //   gioHangCapNhap.slice(index,1)
    // }
    var gioHangCapNhap=this.state.gioHang.filter(sp=>sp.maSP!==maSP)

    this.setState({
      gioHang:gioHangCapNhap
    })
  
  }

  tangGiamSoLuong = (maSP,tangGiam)=>{
    var gioHangCapNhap = [...this.state.gioHang]
    let index = gioHangCapNhap.findIndex(sp=>sp.maSP===maSP)
    if(tangGiam)
    {
      gioHangCapNhap[index].soLuong+=1
    }else
    {
      if(gioHangCapNhap[index].soLuong > 1 ){
        gioHangCapNhap[index].soLuong -= 1
      }
    }
    //render lại giỏ hàng
    this.setState({
      gioHang:gioHangCapNhap
    })
  }


  render() {
    let tongSoLuong = this.state.gioHang.reduce((tsl, spGH, index) => {
      return (tsl += spGH.soLuong);
    }, 0);
    return (
      <div className="container">
        <h3 className="text-center text-success">Bài tập giỏ hàng</h3>
        <ModalGioHang gioHang={this.state.gioHang} xoaGioHang={this.xoaGioHang} tangGiamSoLuong={this.tangGiamSoLuong} />
        <div className="text-end">
          <span
            className="text-danger"
            style={{ cursor: "pointer", fontSize: "17px", fontWeight: "bold" }}
            data-bs-toggle="modal"
            data-bs-target="#modelId"
          >
            Giỏ hàng ({tongSoLuong})
          </span>
        </div>
        <DanhSachSanPham
          mangSanPham={phoneData}
          themGioHang={this.themGioHang}
        />
      </div>
    );
  }
}

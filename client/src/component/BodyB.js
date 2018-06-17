import React from "react";
import {
  Tab,
  Label,
  Form,
  Dropdown,
  Divider,
  Button,
  Icon,
  TextArea,
  Checkbox
} from "semantic-ui-react";
import "react-datepicker/dist/react-datepicker.css";
import "../css/Header.css";

var country_list = require("../component/province.json");

export default class BodyB extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      provinceList: country_list,
      isFollower: true,

      campAddress: "",
      campProvince: "",
      campDistrict: "",
      haveGoodSpace: true,

      laborName: "",
      laborSurname: "",
      laborTel: "",
      chkLaborTel: true,
      laborID: "",
      chkLaborID: true,
      laborNationality: "",
      laborType: "",

      // is follower
      haveHusband: false,
      haveWife: false,
      countLaborFollower: "",

      isFollowerMore15: false,
      countFollowerMore15: 0,
      isFollowerLess15: false,
      countFollowerLess15: 0,
      isFollowerOther: false,
      countFollowerOther: 0
    };
  }

  onSubmitForm = () => {
    this.props.getStateFormB(this.state);
    this.props.onClick(this.props.value);
  };

  getDataI = () => {
    let sum =
      parseInt(this.state.countFollowerMore15) +
      parseInt(this.state.countFollowerLess15);
    this.props.getDataCount(sum);
  };

  onCheckGoodSpace = (e, { value }) => {
    this.setState(
      {
        haveGoodSpace: value
      },
      () => {
        console.log(this.state.haveGoodSpace);
      }
    );
  };

  onCheckFollower = (e, { value }) => {
    this.setState(
      {
        isFollower: value
      },
      () => {
        console.log(this.state.isFollower);
      }
    );
  };

  chkFollowerMore15 = () => {
    this.setState(
      {
        isFollowerMore15: !this.state.isFollowerMore15
      },
      () => {
        console.log("check more15", this.state.isFollowerMore15);
      }
    );
  };

  chkFollowerLess15 = () => {
    this.setState(
      {
        isFollowerLess15: !this.state.isFollowerLess15
      },
      () => {
        console.log("check less15 ", this.state.isFollowerLess15);
      }
    );
  };

  chkFollowerOther = () => {
    this.setState(
      {
        isFollowerOther: !this.state.isFollowerOther
      },
      () => {
        console.log("check other ", this.state.isFollowerOther);
      }
    );
  };

  onChangeCampAddress = e => {
    this.setState(
      {
        campAddress: e.target.value
      },
      () => {
        console.log("camp address ", this.state.campAddress);
      }
    );
  };

  onChangeCampProvince = (e, data) => {
    this.setState(
      {
        campProvince: data.value
      },
      () => {
        console.log("Province", this.state.campProvince);
      }
    );
  };

  onChangeCampDistict = (e, data) => {
    this.setState(
      {
        campDistrict: data.value
      },
      () => {
        console.log("Distict", this.state.campDistrict);
      }
    );
  };

  onChangeLaborName = e => {
    this.setState(
      {
        laborName: e.target.value
      },
      () => {
        console.log("labor name", this.state.laborName);
      }
    );
  };

  onChangeLaborSurName = e => {
    this.setState(
      {
        laborSurname: e.target.value
      },
      () => {
        console.log("labor surname", this.state.laborSurname);
      }
    );
  };

  validateLaborTel = e => {
    let regexTel = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    e.target.value.match(regexTel)
      ? this.setState(
          {
            chkLaborTel: true,
            laborTel: e.target.value
          },
          () => {
            console.log(
              "[validate] labor telephone no",
              this.state.chkLaborTel,
              this.state.laborTel
            );
          }
        )
      : this.setState({
          chkLaborTel: false
        });
  };

  validateLaborID = e => {
    let regexLaborID = /^\d+$/;
    e.target.value.match(regexLaborID)
      ? this.setState(
          {
            chkLaborID: true,
            laborID: e.target.value
          },
          () => {
            console.log(
              "[validate] labor id",
              this.state.chkLaborID,
              this.state.laborID
            );
          }
        )
      : this.setState({
          chkLaborID: false
        });
  };

  onChangeNationality = e => {
    this.setState(
      {
        laborNationality: e.target.value
      },
      () => {
        console.log("labor nationality", this.state.laborNationality);
      }
    );
  };

  onChangeLaborType = e => {
    this.setState(
      {
        laborType: e.target.value
      },
      () => {
        console.log("labor type", this.state.laborType);
      }
    );
  };

  onChangeFollowerMore15 = e => {
    this.setState(
      {
        countFollowerMore15: e.target.value
      },
      () => {
        console.log("countFollowerMore15", this.state.countFollowerMore15);
        this.getDataI();
      }
    );
  };

  onChangeFollowerLess15 = e => {
    this.setState(
      {
        countFollowerLess15: e.target.value
      },
      () => {
        console.log("countFollowerLess15", this.state.countFollowerLess15);
        this.getDataI();
      }
    );
  };

  onChangeFollowerOther = e => {
    this.setState(
      {
        countFollowerOther: e.target.value
      },
      () => {
        console.log("countFollowerOther", this.state.countFollowerOther);
      }
    );
  };

  render() {
    return (
      <div>
        <Tab.Pane attached={false}>
          <Label as="a" color="yellow" ribbon>
            ข้อมูลแคมป์ที่พักคนงาน
          </Label>
          <Form>
            <Form.Group widths="equal">
              <Form.Field
                id="form-textarea-control-opinion"
                control={TextArea}
                label="ที่อยู่"
                placeholder="ที่อยู่"
                onChange={this.onChangeCampAddress}
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Dropdown
                placeholder="จังหวัด"
                search
                selection
                options={this.state.provinceList}
                className="dropdown"
                value={this.state.province}
                onChange={this.onChangeCampProvince}
              />
              <Dropdown
                placeholder="ตำบล"
                search
                selection
                options={this.state.provinceList}
                className="dropdown"
                value={this.state.province}
                onChange={this.onChangeCampDistict} // same function because mock
              />
            </Form.Group>

            <Form.Field>
              <strong>มีการก่อสร้างพื้นที่เด็ก The Good Space หรือไม่</strong>
            </Form.Field>
            <Form.Field>
              <Checkbox
                radio
                label="มีการก่อสร้าง The Good Space แล้ว"
                name="checkboxRadioGroup"
                value={true}
                checked={this.state.haveGoodSpace === true}
                onChange={this.onCheckGoodSpace}
              />
            </Form.Field>
            <Form.Field>
              <Checkbox
                radio
                label="ยังไม่มีการก่อสร้าง"
                name="checkboxRadioGroup"
                value={false}
                checked={this.state.haveGoodSpace === false}
                onChange={this.onCheckGoodSpace}
              />
            </Form.Field>

            <Label as="a" color="yellow" ribbon>
              ข้อมูลแรงงาน
            </Label>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                id="form-subcomponent-shorthand-input-first-name"
                label="ชื่อ"
                placeholder="ชื่อ"
                onChange={this.onChangeLaborName}
              />
              <Form.Input
                fluid
                id="form-subcomponent-shorthand-input-last-name"
                label="นามสกุล"
                placeholder="นามสกุล"
                onChange={this.onChangeLaborSurName}
              />
            </Form.Group>
            <Form.Group widths="equal">
              {this.state.chkLaborTel ? (
                <Form.Input
                  fluid
                  id="form-subcomponent-shorthand-input-first-name"
                  label="เบอร์โทรศัพท์"
                  placeholder="เบอร์โทรศัพท์"
                  onChange={this.validateLaborTel}
                />
              ) : (
                <Form.Input
                  fluid
                  id="form-subcomponent-shorthand-input-first-name"
                  label="เบอร์โทรศัพท์ (10ตัวเลข)"
                  placeholder="เบอร์โทรศัพท์ "
                  onChange={this.validateLaborTel}
                  error
                />
              )}

              {this.state.chkLaborID ? (
                <Form.Input
                  fluid
                  id="form-subcomponent-shorthand-input-last-name"
                  label="เลขประจำตัวผู้ใช้แรงงาน"
                  placeholder="0000000"
                  onChange={this.validateLaborID}
                />
              ) : (
                <Form.Input
                  fluid
                  id="form-subcomponent-shorthand-input-last-name"
                  label="เลขประจำตัวผู้ใช้แรงงาน (ตัวเลขเท่านั้น)"
                  placeholder="0000000"
                  onChange={this.validateLaborID}
                  error
                />
              )}
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                id="form-subcomponent-shorthand-input-first-name"
                label="สัญชาติ"
                placeholder="เช่น พม่า"
                onChange={this.onChangeNationality}
              />
              <Form.Input
                fluid
                id="form-subcomponent-shorthand-input-last-name"
                label="ประเภทแรงงาน"
                placeholder="เช่น ช่างปูน/ช่างไม้/ช่างไฟ/อื่นๆ"
                onChange={this.onChangeLaborType}
              />
            </Form.Group>

            <Form.Field>
              <strong>มีผู้ติดตามหรือไม่</strong>
            </Form.Field>
            <Form.Field>
              <Checkbox
                radio
                label="ไม่มีผู้ติดตาม"
                name="checkboxRadioGroup"
                value={true}
                checked={this.state.isFollower === true}
                onChange={this.onCheckFollower}
              />
            </Form.Field>
            <Form.Field>
              <Checkbox
                radio
                label="มีผู้ติดตาม"
                name="checkboxRadioGroup"
                value={false}
                checked={this.state.isFollower === false}
                onChange={this.onCheckFollower}
              />
            </Form.Field>

            {this.state.isFollower ? null : (
              <div>
                <Divider horizontal>กรณีมีผู้ติดตาม</Divider>
                <div>
                  <Checkbox
                    label={<label>สามี</label>}
                    onClick={() => {
                      this.setState({ haveHusband: !this.state.haveHusband });
                    }}
                  />
                </div>
                <div>
                  <Checkbox
                    label={<label>ภรรยา</label>}
                    onClick={() => {
                      this.setState({ haveWife: !this.state.haveWife });
                    }}
                  />
                </div>
                <br />
                <div>
                  <Checkbox
                    label={<label>บุตร/หลาน/ญาติ(อายุมากกว่า 15 ปี)</label>}
                    onChange={this.chkFollowerMore15}
                  />
                </div>
                {this.state.isFollowerMore15 ? (
                  <Form.Input
                    fluid
                    id="form-subcomponent-shorthand-input-first-name"
                    label="โปรดระบุจำนวนคน"
                    placeholder="จำนวน"
                    onChange={this.onChangeFollowerMore15}
                  />
                ) : null}

                <div>
                  <Checkbox
                    label={<label>บุตร/หลาน/ญาติ(อายุน้อยกว่า 15 ปี)</label>}
                    onChange={this.chkFollowerLess15}
                  />
                </div>
                {this.state.isFollowerLess15 ? (
                  <Form.Input
                    fluid
                    id="form-subcomponent-shorthand-input-first-name"
                    label="โปรดระบุจำนวนคน"
                    placeholder="จำนวน"
                    onChange={this.onChangeFollowerLess15}
                  />
                ) : null}

                <div>
                  <Checkbox
                    label={<label>อื่นๆ</label>}
                    onChange={this.chkFollowerOther}
                  />
                </div>
                {this.state.isFollowerOther ? (
                  <Form.Input
                    fluid
                    id="form-subcomponent-shorthand-input-first-name"
                    label="โปรดระบุจำนวนคน"
                    placeholder="จำนวน"
                    onChange={this.onChangeFollowerOther}
                  />
                ) : null}
              </div>
            )}

            <div style={{ align: "center" }}>
              <Button.Group>
                {//   this.state.campAddress !== 0 &&
                // this.state.campProvince !== 0 &&
                // this.state.campDistrict !== 0 &&
                // this.state.laborName.length !== 0 &&
                // this.state.laborSurname.length !== 0 &&
                // this.state.chkLaborTel &&
                // this.state.chkLaborID &&
                // this.state.laborNationality &&
                this.state.laborType ? (
                  <Button positive onClick={this.onSubmitForm}>
                    Next
                    <Icon name="right arrow" />
                  </Button>
                ) : (
                  <Button positive disabled>
                    Next
                    <Icon name="right arrow" />
                  </Button>
                )}
                {/* <Button positive>Next</Button> */}
              </Button.Group>
            </div>
          </Form>
        </Tab.Pane>
      </div>
    );
  }
}

import React, { Component } from 'react';
import coin from '../image/coin.svg';
import createERC from '../image/createERC.svg';
import directoryTool from '../image/directoryTool.svg';
import contentPromotion from '../image/contentPromotion.svg';
import email from '../image/email.svg';
import cdocument from '../image/cdocument.svg';
import support from '../image/support.svg';
import stox from '../image/stox.png';
import bounty from '../image/bounty.png';
import spring_role from '../image/spring_role.png';

const NvestContext = React.createContext();

export class Provider extends Component {
    state = {
        data: [
            { logo: coin, title: "Get your custom pricing today", link: '/form', id: "1" },
            { logo: createERC, title: "Create a ERC-20 Token", link: '/create-ERC', id: "2" },
            { logo: directoryTool, title: "ICO Directory Tools", link: '/directory-tool', id: "3" },
            { logo: contentPromotion, title: "Content Promotion", link: '/content-Promotion', id: "4" },
            { logo: email, title: "Email ICO Investors", link: '/email', id: "5" },
            { logo: cdocument, title: "Content Writing Services", link: '/content-document', id: "6" },
            { logo: support, title: "ICO Support", link: '/support', id: "7" },
            { logo: stox, title: "Stox", link: '/stox', id: "8" },
            { logo: bounty, title: "Create a bounty on bountymissions", link: '/bounty', id: "9" },
            { logo: spring_role, title: "Spring Role", link: '/spring-role', id: "10" },
        ],
        ercForm:[

        ]
    }
    ercFormdataRender = (formData) => {
        formData.id = Math.random();
        const dataupdate = [...this.state.data, formData]
        this.setState({
            ercForm: dataupdate
        })
    }
    render() {
        
        return (
            <div className="index">
            <NvestContext.Provider value={{
                data: this.state.data,
                ercForm:this.state.ercForm,
                actions: {
                    ercFormData: this.ercFormdataRender
                }
            }}>
            {console.log(this.state)}
                {this.props.children}
            </NvestContext.Provider>
            </div>
        )
    }
}
export const Consumer = NvestContext.Consumer;

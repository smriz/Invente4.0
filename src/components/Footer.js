import React from 'react'
class Footer extends React.Component{
    render(){
        return <div className="footer holi">
              <div className='row space-around' style={{color: '#000000',background: 'whitesmoke',padding:10}}>
                <div className="row centerify">
                  {/* <a className='-8p' href="https://www.facebook.com/ssn_invente4.0/"><i class="fab fa-facebook-f"></i></a> */}
                  <a className='-8p' href="https://www.instagram.com/ssn_invente4.0/"><i className="fab fa-instagram"></i></a>
                  {/* <a className='-8p' href="https://twitter.com/ssn_invente4.0"><i class="fab fa-twitter"></i></a> */}
                </div>

              </div>
            
        </div>
    }
}
export default Footer

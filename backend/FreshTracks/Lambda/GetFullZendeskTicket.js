
/* 
Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
MIT License
Copyright [first edit year]-[latest edit year] Amazon.com, Inc. or its affiliates. All Rights Reserved.
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including  without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to  the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN  NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
const axios = require('axios')
console.log('starting');
exports.handler = async (event) => {
            try {
                const res = await axios({
                    method:"get",
                    url:`https://${process.env.ZenDeskDomain}.com/api/v2/tickets/${event.detail.ticket_event.ticket.id}.json`,
                    auth:{
                        username: `${process.env.ZenDeskUsername}/token`,
                        password: process.env.ZenDeskPassword
                    }
                });
                
                return res.data.ticket;
                
            } catch (e) {
                console.log(e)
                return {
                    statusCode: 400,
                    body: JSON.stringify(e)
                }
            }
    }


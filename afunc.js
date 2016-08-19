var get = function ()
{
  var x1 = document.getElementById('ID').value
  var x2 = document.getElementById('Pwd').value

  var Users =
  [
    {Uname: 'sidhantgupta004', password: '123shop'},
    {Uname: 'guptasidhant004', password: 'shopper345'},
    {Uname: 'rohitC', password: '99shopper'},
    {Uname: 'admin', password: 'admin'}
  ]
  var c = 0;
  for (i=0; i<Users.length; i++)
  {
    if (x1 == Users[i].Uname && x2 == Users[i].password)
      c = 1
  }
  
  if (c == 1)
    alert('Login Successful')
}
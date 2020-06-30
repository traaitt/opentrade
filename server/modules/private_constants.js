'use strict';

exports.recaptcha_priv_key = '6Lc1sasZAAAAAKy077wvlcz_mmnw-nFm-l5e7IXo';
exports.password_private_suffix = 'ZmENLHuupahKyKbpw9H6yq5sbhsLt7nqtEMxfSkECBVd69jQpUd2TJ3DVkcXLdhZddXxFHu6JydURZ';
exports.SSL_KEY = '../ssl_certificates/privkey.pem'; //change to your ssl certificates private key
exports.SSL_CERT = '../ssl_certificates/fullchain.pem'; //change to your ssl certificates fullchain

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

if (exports.password_private_suffix == 'LONG_RANDOM_STRING1') throw new Error('You MUST change default value exports.password_private_suffix !')

exports.walletspassphrase = {
    'MC' : 'LONG_RANDOM_STRING2',
    'BTC' : 'LONG_RANDOM_STRING3',
    'DOGE' : 'LONG_RANDOM_STRING4'
};

exports.IsUnlimitedAddress = function(addr)
{
    if (!addr)
        return false;
        
    if (addr.indexOf("127.0.0.1") < 0)
        return false;
        
    return true;
}

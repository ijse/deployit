module.exports = function (shipit, configs) {
    require('shipit-deploy')(shipit)
    require('shipit-npm')(shipit)

    shipit.initConfig({
        default: {
            workspace: '/tmp/iserv',
            deployTo: '/var/www/iserv',
            repositoryUrl: 'git@git.coding.net:ijse/iserv.git',
            ignores: ['.git', 'node_modules'],
            rsync: ['--del', '-L', '-K'],
            keepReleases: 5,
            shallowClone: true,
            npm: {
                remote: true,
                installArgs: [],
                installFlags: []
            }
        },
        online: {
            servers: 'root@ijser.cn'
        }
    })
}

'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk')
var yosay = require('yosay')

module.exports = class extends Generator {

    // 1. 接收参数
    prompting() {
        var prompts = [{
            type: 'input',
            name: 'appName',
            message: 'app name: ',
            default: 'autoReactApp'
        }, {
            type: 'input',
            name: 'appDesc',
            message: 'desc: ',
            default: '',
        }, {
            type: 'input',
            name: 'prodPath',
            message: 'production path name: ',
            default: 'dist',
        }, {
            type: 'confirm',
            name: 'ok',
            message: 'ok?',
        }];

        return this.prompt(prompts).then(function (props) {
            // 1.1 将参数挂载在 this 下
            this.props = props;
        }.bind(this))
    }

    // 2. 渲染模版
    writing() {

        // 最后确认时选择n时停止渲染模板
        if (!this.props.ok) {
            console.log(chalk.red('stopped'))
            return false;
        }

        // 拷贝.babelrc
        this.fs.copy(
            this.templatePath('.babelrc'),
            this.destinationPath('.babelrc')
        )

        // 拷贝gitignore文件
        this.fs.copyTpl(
            this.templatePath('gitignore'),
            this.destinationPath('.gitignore'),
            {
                prodPath: this.props.prodPath,
            }
        )

        // 拷贝package.json文件
        this.fs.copyTpl(
            this.templatePath('package.json'),
            this.destinationPath('package.json'),
            {
                appName: this.props.appName,
                appDesc: this.props.appDesc
            }
        )

        // 拷贝yarn.lock
        this.fs.copy(
            this.templatePath('yarn.lock'),
            this.destinationPath('yarn.lock')
        )

        // 拷贝readme文件
        this.fs.copyTpl(
            this.templatePath('README.md'),
            this.destinationPath('README.md'),
            {
                appName: this.props.appName,
                appDesc: this.props.appDesc
            }
        )

        // 拷贝src目录
        this.fs.copy(
            this.templatePath('src/**/*'),
            this.destinationPath('src/')
        )

        // 拷贝build目录
        this.fs.copyTpl(
            this.templatePath('build/**/*'),
            this.destinationPath('build/'),
            {
                prodPath: this.props.prodPath,
            }
        )

    }

    // 3. 安装依赖
    install() {
        if (this.props.ok) {
            console.log(chalk.bgBlue('done, please input \'yarn\' to install !'))
        }
        // this.npmInstall()
    }
}
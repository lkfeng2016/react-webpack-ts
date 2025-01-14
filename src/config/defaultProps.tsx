import { DefaultConfigProps } from '@/typings/global'

const tps609606 = require('@/assets/images/common/tps-609-606.png')
const tps884496 = require('@/assets/images/common/tps-884-496.png')
const titleLogo = require('@/assets/images/common/title_logo.svg')

const defaultProps: DefaultConfigProps = {
  location: {
    pathname: '/home/index',
  },
  siderWidth: 200,
  breadcrumb: true,
  footer: false,
  headerTheme: false,
  navTheme: 'light',
  layout: 'top',
  title: '猪猪管家',
  logo: titleLogo,
  token: {
    token: {
      colorPrimary: '#00b96b', // 品牌色是体现产品特性和传播理念最直观的视觉元素之一
      colorSuccess: '#7ed321', // 用于表示操作成功的 Token 序列
      colorWarning: '#FFC100', // 用于表示操作警告的 Token 序列
      colorInfo: '', // 用于表示操作信息的 Token 序列
      colorError: '#F53F3F', // 用于表示操作失败的 Token 序列
      colorTextBase: '#000000', // 用于派生文本色梯度的基础变量
      controlHeight: 32,
      fontSize: 14,
    },
    header: {
      colorBgHeader: '#FFFFFF',
      colorHeaderTitle: '#00b96b',
      heightLayoutHeader: 64,
      colorBgMenuItemHover: '#217BA0',
      colorBgMenuItemSelected: '#46A0C0',
      colorTextMenuSelected: '#FFFFFF',
      colorTextMenuActive: '#FFFFFF',
      colorTextMenu: '#FFFFFF',
      colorTextMenuSecondary: '#FFFFFF',
    },
    sider: {
      colorMenuBackground: '#FFFFFF', // 背景色
      colorBgMenuItemCollapsedHover: '#EFFAFF',
      colorBgMenuItemCollapsedSelected: '#EFFAFF',
      colorBgMenuItemCollapsedElevated: '#EFFAFF',
      colorTextMenuSelected: '#217BA0', // 选中的字体颜色
      colorTextMenuItemHover: '#217BA0', // 鼠标经过的字体颜色
      colorTextMenuActive: '#217BA0', //
      colorTextMenu: 'rgba(0,0,0,0.65)', // 字体颜色
      marginLayoutMenu: 12,
      paddingLayoutMenu: 4,
      borderRadiusMenu: 8,
      overflow: 'hidden',
    },
    pageContainer: {
      paddingInlinePageContainerContent: 12,
      paddingBlockPageContainerContent: 12,
    },
  },
  bgLayoutImgList: [
    {
      src: tps609606,
      left: 85,
      bottom: 100,
      height: 303,
    },
    {
      src: tps609606,
      bottom: -68,
      right: -45,
      height: 303,
    },
    {
      src: tps884496,
      bottom: 0,
      left: 0,
      width: 331,
    },
  ],
}

export default defaultProps

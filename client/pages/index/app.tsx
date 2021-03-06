import React, { useState, useEffect, useRef } from 'react';
import dva, { connect } from 'dva';
import Slide from 'client/components/Draw/slide';
import TouchEl from 'client/components/TouchEl';
import { loginFunc } from 'client/utils/globalVar'
import store from 'store2';
import get from 'lodash/get';
import { Toast } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import styles from './app.m.scss';

import classnames from 'classnames/bind';
const cx = classnames.bind(styles);


function Index(props) {
  const { children, show, curr, showLoginModal, isNeedLogin, dispatch, userInfo, author, policy } = props;
  const emailRef = useRef();
  const passwordRef = useRef();
  const [is_check, setCheck] = useState(true);
  console.log(policy,showLoginModal,'policy===')
  return (
    <>
      <div className={cx('main_wrap')}>
        {children}
      </div>
      {policy && <>
        <div className={cx('fixed_')}
          onClick={() => {
            dispatch({
              type: 'global/update',
              payload: {
                policy: false
              }
            })
          }}
        ></div>
        <div className={cx('box_w')}>
          <div className={cx('close')}
            onClick={() => {
              dispatch({
                type: 'global/update',
                payload: {
                  policy: false
                }
              })
            }}
          ></div>
          <div className={cx('box')}>
            <div className={cx('iiframe', 'iii')}>
              <div>
                <div style={{ height: '1rem', width: '100%' }} />
                <div>
                  J.D. Power<strong>中国（君迪）隐私政策</strong>
                </div>
                <div >
                  生效日期: 2020 年 08月20日
        </div>
                <div>
                  本隐私政策描述捷笛企业管理（上海）有限公司（以下简称<strong>"J.D. Power 中国"</strong>或“<strong>"我们"</strong>)如何收集、使用和分享您的个人信息，以及您对您的个人信息享有的权利。请您在使用我们的服务或决定向我们提供您的个人信息前仔细阅读并确认您已充分理解并同意本隐私政策。
        </div>
                <div>
                  本隐私政策适用于您使用我们的任何网站、应用及其他引用本隐私政策和在本隐私政策中描述的J.D. Power中国产品或信息收集方法等服务（以下统称为"<strong>服务</strong>").
        </div>
                <div>
                  为方便您阅读理解,本隐私政策可能以不同语言发布。如本隐私政策的其他语言版本与此简体中文版有任何差异，请以此简体中文版为准。
        </div>
                <div>如果您对我们的隐私做法有任何疑问，请通过"联系我们"中的方式与我们联系。 </div>
                <div>
                  <strong>
                    本隐私政策涵盖以下内容：
            </strong>
                </div>

                <div id="section1">
                  <strong>
                    <span>我们如何收集和使用您的个人信息？</span>
                  </strong>
                </div>
                <div>
                  <strong>个人信息</strong>个人信息是指以电子或者其他方式记录的能够单独或者与其他信息结合识别特定自然人身份或者反映特定自然人活动情况的各种信息。
        </div>
                <div>
                  <strong>个人敏感信息</strong>是指一旦泄露、非法提供或滥用可能危害人身和财产安全，极易导致个人名誉、身心健康受到损害或歧视性待遇等的个人信息。
        </div>
                <div>
                  以上关于个人信息与个人敏感信息的定义及其对应的信息类型分别与《个人信息安全规范》最新生效版本的附录A（资料性附录）-个人信息示例和附录B（资料性附录）-个人敏感信息判定的内容一致
        </div>
                <div>
                  <strong>
                    1.市场研究/调查
            </strong>
                </div>
                <div>为开展消费者对各种产品和服务的偏好和态度进行市场研究或调查及验证调查的真实性，我们收集和使用的您的个人信息包括以下类别。您也可以选择拒绝向我们提供某类型的个人信息，或不参加我们的市场研究或调查。  </div>
                <div>
                  <img style={{ width: '100%', maxWidth: '590px' }} src="https://cdn.jdpower.com/Privacy/chinesePrv.png" />
                </div>
                <div>
                  <strong>2.职位申请</strong>
                </div>
                <div>为评估您是否适合您所申请的职位，当您申请特定职位或向我们表示您有兴趣加入我们时, 我们会从您通过我们的网站（包括但不限于 <a href="https://www.jdpower.com/business/careers/jobs">https://www.jdpower.com/business/careers/jobs</a> 提交的求职申请及您提交的文件中收集关于您的以下信息。</div>
                <div>
                  <strong>•工作机会申请信息</strong>, 包括您的简历、工作经历信息、成绩单、写作样本、推荐信，以及其他您提交的文件。
        </div>
                <div>
                  <strong>3.其他您主动提交的信息</strong>
                </div>
                <div>
                  您可以选择通过服务向我们自愿提交我们未向您要求收集的其他信息，在这种情况下，您对此类信息负全部责任。
        </div>
                <div>
                  <strong>4.我们自动收集的信息 </strong>
                </div>
                <div>
                  您使用服务时，为确保我们的网站的正常运转、向您提供更优质的产品和服务，和向您推荐您可能感兴趣的产品和服务，我们会自动收集以下类别的信息：
        </div>
                <div>
                  <ul>
                    <li>
                      <strong>服务使用数据。</strong>在您使用服务或与我们互动时，我们会收集您使用的功能，访问的页面，查看的电子邮件、内容和广告，购买和感兴趣的产品，浏览的时间，您的推荐和退出页面，以及其他类似信息。
                </li>
                    <li>
                      <strong>设备连接和配置数据。</strong> 您使用的设备或浏览器的类型、您设备的操作软件、您设备的区域和语言设置、您的 IP 地址、MAC 地址、设备的广告 ID（例如，IDFA 或 AAID）、其他设备标识符、设备运营商、时区、网络状态、浏览器标识符、位置、互联网服务提供商、操作系统，以及单独或组合使用能唯一识别您的设备的其他信息。
                </li>
                    <li>
                      <strong>位置数据。</strong> 您的设备的非精确位置数据（例如，从 IP 地址或指示城市或邮政编码级别的数据派生的位置），在获得您的授权后获取的您的设备的精确位置数据。
                </li>
                    <li>
                      <strong>Cookie</strong> 是当您访问任何网站时，这些网站可能传送到您的浏览器并存储在您设备中的一些信息。当您再次访问这些网站时，存储在您设备中的Cookie会将之前存储的信息返回至网站。Cookie可以告诉我们，使用者是否首次访客或之前曾到访有关网站以及使用者对网站的哪些内容最感兴趣。Cookie的使用，可以在有关网站上存放您的访问信息，从而提升您的上网体验。Cookie还可以帮助我们统计有关网站的访问活动，让我们可厘定哪些领域及功能最受欢迎。此等信息令我们得以改善有关网站。 大部份网络浏览器都被默认均设定为接受Cookie。然而，您可重新设定您的浏览器，以拒绝接受一切Cookie或显示接收到Cookie。若您选择拒绝接受Cookie，有关网站的某些功能可能会减弱。 我们（以及与我们合作的实体）使用 Cookie 以便在您访问网站时“记住”您，跟踪用户趋势，衡量广告效果，以及收集有关您如何使用我们的网站、使用我们客户的网站，或者如何与我们的广告或我们的合作伙伴的广告互动的信息等。我们还使用 Cookie 为您提供相关内容，并将不相关的广告更换为更符合您兴趣的广告。
                </li>
                    <li>
                      <strong>Web Beacons</strong>也被称为“像素标签”，它是内嵌在网页和电子邮件内的小型图形文件，让我们或我们的第三方合作伙伴通过监控网站上的访问活动而或使Cookie更为有效。通过收集访问者在收到我们的电邮或网站内的指引信息之前和之后访问网站的情况，它可以帮助我们或我们的第三方合作伙伴评估访问行为，从而估计及提高我们的市场推广效率。我们使用日志档案储存透过网站信标所收集的信息数据。即使您关闭 Cookie，像素标签也可以检测到唯一的网站访问。 <br /><br />
                    我们的产品和服务上可能会有广告商或其他合作方放置的Cookie或网络Beacon，可能会收集与您相关的非个人身份信息，以用于分析您如何使用该等服务、向您发送您可能感兴趣的广告，或用于评估广告服务的效果。这些第三方Cookie或网络Beacon收集和使用该等信息，不受本政策约束，而是受相关第三方的隐私政策约束，我们不对第三方的信息采集行为承担责任。
                </li>
                  </ul>
                </div>
                <div>
                  <strong>5.设备权限调用</strong>
                </div>
                <div>
                  我们在提供服务的过程中，可能需要您开启一些设备访问权限，例如相机（摄像头）、相册（图片库）、麦克风、地理位置等访问权限，以实现拍摄、上传图片、基于位置提供的相关服务等功能所涉及的信息收集和使用。您也可以在设备的设置功能中随时选择关闭部分或全部权限，从而拒绝我们收集相应的个人信息。在不同设备中，权限显示方式及关闭方式可能有所不同，具体请参考设备及系统开发方说明或指引。请您注意，您开启这些权限即代表您授权我们可以收集和使用这些个人信息来实现上述的功能，您关闭权限即代表您取消了这些授权，则我们将不再继续收集和使用您的这些个人信息，也无法为您提供上述与这些授权所对应的功能。您关闭权限的决定不会影响此前基于您的授权所进行的个人信息的处理。
        </div>
                <div>
                  <strong>
                    征得您同意收集、使用您个人信息的例外
            </strong>
                </div>
                <div>
                  <p>您充分知晓，以下情形中，我们收集、使用您的个人信息无需征得您的授权同意： </p>
                  <div>
                    <ul>
                      <li>
                        1.与我们履行法律法规规定的义务相关的；
                    </li>
                      <li>
                        2.与国家安全、国防安全直接相关的；
                    </li>
                      <li>
                        3.与公共安全、公共卫生、重大公共利益直接相关的
                    </li>
                      <li>
                        4.与犯罪侦查、起诉、审判和判决执行等直接相关的；
                    </li>
                      <li>
                        5.出于维护您或其他个人的生命、财产等重大合法权益但又很难得到您本人同意的；
                    </li>
                      <li>
                        6.所涉及的个人信息是您自行向社会公众公开的；
                    </li>
                      <li>
                        7.根据您要求签订和履行合同所必需的；
                    </li>
                      <li>
                        8.从合法公开披露的信息中收集的您的个人信息的，如合法的新闻报道、政府信息公开等渠道；
                    </li>
                      <li>
                        9.维护所提供产品或服务的安全稳定运行所必需的，例如发现、处置产品或服务的故障。
                    </li>
                    </ul>
                  </div>
                </div>
                <div id="section2">
                  <strong>
                    <span>我们如何委托处理、共享、转让、公开披露您的个人信息？ </span>
                  </strong>
                </div>
                <div>
                  除适用“共享、转让、公开披露个人信息时事先征得授权同意的例外”的情形外，我们委托处理、共享、转让、公开披露您个人信息的情况如下。
        </div>
                <div>
                  <strong>委托处理</strong>
                </div>
                <div>
                  <strong>1.我们作为受托方的委托处理</strong>
                </div>
                <div>
                  为完成我们的客户的委托或指示，我们会根据我们的客户的指示收集和处理您的个人信息（以下称为“客户数据”）。客户数据包括上述基本资料信息、身份信息、车辆信息、服务使用数据、设备连接和配置数据，以及位置数据和其他信息等。我们会在一定程度上将从上述不同方法收集的有关您的信息与客户数据合并，我们将根据本隐私政策中描述的做法处理合并信息，并遵守我们的客户的指示和我们与其的约定。请您理解，我们作为受托方无法对我们的客户如何处理我们受他们委托收集的信息，我们建议您查看他们自己的隐私政策。
        </div>
                <div>
                  <strong>2.我们作为委托方的委托处理 </strong>
                  <div>
                    <ul>
                      <li>
                        与<strong>我们的服务提供商</strong>分享您的<strong>车架号（VIN</strong>, 以便他们向我们提供服务。此类服务提供商包括在营销、数据分析、数据匹配、技术支持和客户服务方面提供协助的服务提供商。包括使用分析提供商（包括百度统计）来帮助我们分析您对本服务的使用情况，编制有关本服务活动的统计报告，并向我们提供与服务活动和互联网使用相关的其他服务。您可以通过访问 <a href="https://tongji.baidu.com/web/help/article?id=330&type=0">https://tongji.baidu.com/web/help/article?id=330&type=0.</a>了解百度统计的隐私政策。除提供此类协助的目的外，我们会要求我们的服务提供商不得出于任何其他目的使用您的个人信息，除非该等信息已通过匿名化等技术手段而无法识别您个人。
                    </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <strong>
                    共享
            </strong>
                </div>
                <div>
                  除非根据本隐私政策中的说明，或事先获得您明确的同意或授权，或符合“共享、转让、公开披露个人信息时事先征得授权同意的例外”的情形，否则我们不会与J.D. Power中国以外的任何公司、组织和个人共享您的个人信息。
        </div>
                <div>
                  <ul>
                    <li>
                      <div>与 <strong>供应商和其他实体</strong> 合作时分享您的 <strong>车架号（VIN),以便验证调研信息的真实性，为您量身定制广告、衡量和改善我们的服务和广告效果。</strong>包括：</div><br />
                      <div>
                        (a)与 <strong>Quality Control供应商</strong>, 分享您的<strong>手机号码</strong>及<strong>车辆照片及车架号（VIN</strong>，用于验证调研信息的真实性或向您发送抽奖通知。
                    </div><br />
                      <div>
                        (b)与我们的<strong>广告服务提供商</strong>分享您的<strong>微信ID，手机号码</strong>, 用于在本服务和/或其他服务上投放广告（以下称为“基于兴趣的广告”）。该类广告服务提供商使用我们的服务和其他服务上的跟踪技术来追踪您的活动，以便关联您使用的不同设备，并在您离开本服务后，在本服务和其他服务或第三方设备上向您提供相关广告和/或其他内容。您可以随时通过设备设置来重置设备广告 ID，或通过该设置限制对所收集的有关您的信息的使用，或通过卸载应用来停止通过某个应用收集的所有信息。
                          </div><br />
                      <div>,
                      这些实体可以充当我们的服务提供商，在某些情况下也可以独立决定如何处理您的信息。我们建议您熟悉并查阅其隐私政策和使用条款
                    </div>
                    </li>
                    <li>
                      与<strong>合作伙伴</strong>分享您的<strong>姓名，电话号码，车辆信息，地理位置信息以便一起开展联合销售或产品促销活动，</strong>包括与我们的合作伙伴共享有关您的在线标识符和车辆交易信息，以衡量广告效果并支持营销分析，细分和统计模型。我们的某些合作伙伴也可能将我们服务的插件嵌入到他们自己的网站和应用中。请您知悉，在该等情形下，我们不能控制我们的业务合作伙伴如何处理这些个人信息。我们的合作伙伴负责管理他们自己在该等情形下处理个人信息的行为。因此，我们建议您在使用我们合作伙伴的产品或服务时注意查看其隐私政策，以了解他们如何处理您的个人信息。
                </li>
                    <li>
                      当您自愿参加抽奖、竞赛或其他促销活动时，我们会按该等促销活动的官方规则与<strong>相关服务供应商或赞助商</strong>>分享您的<strong>手机号码</strong> 也会出于管理目的或为了满足法律要求而分享信息（包括获奖者名单）。参加促销活动，即表示您同意用于约束此促销活动的官方规则，并且可以允许<strong>赞助商和/或其他实体</strong>在广告或营销材料中使用您的姓名、声音和/或肖像（法律法规禁止使用的除外）。
                </li>
                    <li>
                      我们可能会将您的个人信息与我们的<strong>子公司和关联公司</strong>共享。但我们只会共享必要的个人信息，在此情况下，我们的子公司和关联公司受本隐私政策中所声明目的的约束。我们的关联方如要改变个人信息的处理目的，将再次征求您的授权同意。
                </li>
                    <li>
                      我们可能会将您的个人信息与我们的<strong>子公司和关联公司</strong>共享。但我们只会共享必要的个人信息，在此情况下，我们的子公司和关联公司受本隐私政策中所声明目的的约束。我们的关联方如要改变个人信息的处理目的，将再次征求您的授权同意。
                </li>
                    <li>
                      在<strong>事先征得您的同意或授权</strong>时, 我们会依照您的指示或您的授权同意分享您的个人信息，例如，我们应您的请求与经销商分享您对某款汽车的兴趣。
                </li>
                    <li>
                      <strong>其他第三方独立实体运营的网站、平台和服务</strong>与我们共享的您的信息。我们还可能允许您从我们的服务跳转到其他服务，或者通过其他第三方独立实体运营的网站、平台和服务（例如社交媒体平台上的品牌页面）获取我们的服务。这些由其他第三方独立实体运营的内容可能会收集和使用您的个人信息，并受其自身隐私政策或个人信息保护规则的约束，包括他们与我们共享什么信息。因此，我们建议您查阅其隐私政策和使用协议。
                </li>
                  </ul>
                  <div>
                    <strong>
                      转让
            </strong>
                  </div>
                  <div>
                    除非根据本隐私政策中的说明，或事先获得您明确的同意或授权，或符合“共享、转让、公开披露个人信息时事先征得授权同意的例外”的情形，否则我们不会向J.D. Power中国以外的任何公司、组织和个人转让您的个人信息。
        </div>
                  <div>
                    <ul>
                      <li>在涉及合并、<strong>收购或破产清算</strong>时，如涉及到个人信息转让，我们会在要求新的持有您个人信息的公司、组织继续受本隐私政策的约束，否则我们将要求该公司、组织重新向您征求授权同意。 </li>
                    </ul>
                  </div>
                  <div>
                    <strong>
                      公开披露
            </strong>
                  </div>
                  <div>
                    除非根据本隐私政策中的说明，或事先获得您明确的同意或授权，或符合“共享、转让、公开披露个人信息时事先征得授权同意的例外”的情形，否则我们不会公开披露您的个人信息。
        </div>
                  <div>我们仅会在以下情况，且采取符合业界标准的安全防护措施的前提下，才会公开披露您的个人信息： </div>
                  <div>
                    <ul>
                      <li>
                        根据您的需求，在您明确同意的披露方式下披露您所指定的个人信息；
                </li>
                      <li>
                        根据法律、法规的要求、强制性的行政执法或司法要求所必须提供您个人信息的情况下，我们可能会依据所要求的个人信息类型和披露方式公开披露您的个人信息。在符合法律法规的前提下，当我们收到上述披露信息的请求时，我们会要求提出请求的主体必须出具与之相应的法律文件，如传票或调查函。我们将对该等请求进行慎重的审查，以确保其具备合法依据，且仅限于执法部门因特定调查目的且有合法权力获取的数据。
                </li>
                    </ul>
                  </div>

                  <div>
                    <strong>共享、转让、公开披露个人信息时事先征得授权同意的例外</strong>
                  </div>
                  <div>
                    您充分知晓，以下情形中，共享、转让、公开披露您的个人信息不必事先征得您的授权同意：
        </div>
                  <div>
                    <div>
                      <ul>
                        <li>
                          1.与我们履行法律法规规定的义务相关的；
                    </li>
                        <li>
                          2.与国家安全、国防安全直接相关的；
                    </li>
                        <li>
                          3.与公共安全、公共卫生、重大公共利益直接相关的；
                    </li>
                        <li>
                          4.与刑事侦查、起诉、审判和判决执行等直接相关的；
                    </li>
                        <li>
                          5.出于维护您或其他个人的生命、财产等重大合法权益但又很难得到您本人授权同意的；
                    </li>
                        <li>
                          6.您自行向社会公众公开的个人信息；
                    </li>
                        <li>
                          7.从合法公开披露的信息中收集个人信息的，如合法的新闻报道、政府信息公开等渠道。
                    </li>
                      </ul>
                    </div>
                  </div>
                  <strong>
                    <span>如何退订营销信息？ </span>
                  </strong>
                  <ul>
                    <li>
                      <strong>电子邮件</strong> 您有权选择退出 J.D. Power中国 的任何营销或调查通信。 您可以按照电子邮件或调查中提供的说明，随时选择拒收我们的营销电子邮件或调查，例如通过单击取消订阅链接，或者向“联系我们”中的电子邮件地址向我们发送电子邮件，并在电子邮件的主题字段中填写“取消订阅”(UNSUBSCRIBE) 一词。请注意，您不能选择拒收非促销电子邮件，例如有关您的帐户、交易、服务或 J.D. Power中国 正在进行的业务关系的电子邮件。
                </li>
                    <li>
                      <strong>短信和电话 </strong> 当您完成市场调研后，我们可能会要求您提供电话号码。如果您向我们提供了您的电话号码或者与我们的某个市场调查客户分享了您的电话号码，即表示您同意我们和/或我们的服务提供商可能会不时给您的手机打电话或发短信（使用预测拨号器和/或自动电话拨号系统 - 并且在通话时使用预先录音电话）进行市场调研、提供提醒，或者为您提供额外的调查机会。您可以随时通过以下方式选择拒收短信或禁止呼叫您的电话号码：(i) 对于短信，发送短信““TD”回复您收到的来自我们的任何短信，或者按照“联系我们”部分中所述的方式联系我们，并说明您要拒收短信；(ii) 对于来电，在您接听我们打来的任何电话时要求禁止呼叫，或者按照“联系我们”部分中所述的方式联系我们，并说明您想禁止呼叫。
                </li>
                  </ul>

                  <strong>
                    <span>我们如何保护您的个人信息？</span>
                  </strong>
                  <div>
                    我们建立专门的管理制度、流程、组织并采取相应措施，旨在帮助保护您的信息免遭丢失、被盗、滥用和未经授权的访问、披露、更改和破坏等风险。 但请您知晓，互联网环境并非绝对安全的环境，但我们将尽力确保您发送给我们的信息的安全性。
        </div>
                  <div>
                    若我们确认发生个人信息泄露等安全事件，我们会按照法律法规要求启动应急预案，阻止安全事件扩大，并以通知、公告等形式告知您。同时，我们还将按照法律法规的要求或监管部门要求上报个人信息安全事件的处置情况。
        </div>
                  <div id="section5">
                    <strong>
                      <span>我们如何存储您的个人信息？</span>
                    </strong>
                  </div>
                  <div>
                    我们在中华人民共和国境内收集和产生的个人信息，将存储在中华人民共和国境内。一般而言，我们仅为实现目的所必需的最短时间保留您的个人信息。在超出保存期限后，我们会对您的个人信息进行删除或者匿名化处理。如果我们终止服务或运营，我们会提前向您通知，并在终止服务或运营后对您的个人信息进行删除或匿名化处理。但国家法律法规、规章、规范性文件或政府的政策、命令等另有要求或为履行我们的合规义务而保留您的个人信息的除外。
        </div>
                  <div id="section6">
                    <strong>
                      <span>您对您的个人信息享有哪些权利？</span>
                    </strong>
                  </div>
                  <div>
                    我们非常重视您对个人信息的关注，并保护您对于您个人信息访问、更正、删除、撤回同意以及注销账号的权利，以使您拥有充分的能力保障您的个人信息安全。除非法律法规规定（见“响应您个人权利请求的例外”部分），您对您的个人信息享有以下权利。
        </div>
                  <div>
                    <strong>
                      • 访问您的个人信息
            </strong>
                  </div>
                  <div>
                    您有权访问您的个人信息，法律法规规定的例外情况除外。如果您想访问您的个人信息，您可以通过“联系我们”列明的方式与我们取得联系。
        </div>
                  <div>
                    <strong>
                      • 更正您的个人信息
            </strong>
                  </div>
                  <div>
                    当您发现我们处理的关于您的个人信息有错误时，您有权要求我们作出更正。如果您想更正您的个人信息，您可以通过“联系我们”列明的方式与我们取得联系。
        </div>
                  <div>
                    <strong>
                      • 删除您的个人信息
            </strong>
                  </div>
                  <div>
                    在以下情形中，您可以通过“联系我们”列明的方式与我们取得联系并向我们提出删除个人信息的请求：
        </div>
                  <div>
                    我们处理个人信息的行为违反法律法规；

            <ul>
                      <li>
                        1. 我们收集、使用您的个人信息，却未征得您的同意；
                </li>
                      <li>
                        2. 我们处理个人信息的行为违反了与您的约定；
                </li>
                      <li>
                        3. 您不再使用我们的产品或服务，或您注销了账号；
                </li>
                      <li>
                        4. 我们不再为您提供产品或服务。
                </li>
                    </ul>
                  </div>
                  <div>
                    若我们决定响应您的删除请求，我们还将同时通知从我们获得您的个人信息的相关实体，要求其及时删除，除非国家法律法规、规章、规范性文件或政府的政策、命令等另有要求或为履行我们的合规义务，或这些实体已经获得您的独立授权。
        </div>
                  <div>
                    <strong>• 改变您授权同意的范围或撤回您的授权 </strong>
                  </div>
                  <div>
                    除非本隐私政策另有说明，您可以通过本隐私政策提供的联络方式联系我们，改变您授权我们继续收集个人信息的范围或撤回您的授权。请您理解，每个业务功能需要一些基本的个人信息才能得以完成，当您撤回同意或授权后，我们无法继续为您提供撤回同意或授权所对应的服务，也不再处理您相应的个人信息。但您撤回同意或授权的决定，不会影响此前基于您的授权而开展的个人信息处理。
        </div>
                  <div>
                    <strong>• 注销账号</strong>
                  </div>
                  <div>
                    关于您注销账号的方式（如您在我们的产品和服务中创建了账号）以及您应满足的条件，请您通过“联系我们”列明的方式与我们取得联系。在您主动注销账号之后，我们将停止为您提供服务，根据适用法律的要求删除您的个人信息或对其进行匿名化处理。
        </div>
                  <div>如果您想行使上述权利，您均可通过本隐私政策“联系我们”提供的联系方式与我们取得联系。</div>
                  <div>
                    为了保障您的个人信息安全，我们可能需要您提供书面请求，或以其他方式证明您的身份，通常情况下，我们将在收到您的反馈并验证您的身份后的15个工作日内向您答复。如无法响应您的请求，我们会在法律规定的最大时限要求内，向您发送通知并解释原因。对于您合理的请求，我们原则上不收取费用，但对多次重复、超出合理限度的请求，我们将视情况收取一定成本费用。对于那些无端重复、需要过多技术手段、给他人合法权益带来风险或者非常不切实际的请求，我们可能会予以拒绝。
        </div>
                  <div>
                    <strong>• 响应您个人权利请求的例外 </strong>
                  </div>
                  <div>
                    在以下情形中，按照法律法规要求，我们将无法响应您的请求：
            <div>
                      <ul>
                        <li>
                          1. 与我们履行法律法规规定的义务相关的；
                    </li>
                        <li>
                          2. 与国家安全、国防安全直接相关的；
                    </li>
                        <li>
                          3. 与公共安全、公共卫生、重大公共利益直接相关的；
                    </li>
                        <li>
                          4. 与刑事侦查、起诉、审判和执行判决等直接相关的；
                    </li>
                        <li>
                          5. 有充分证据表明您存在主观恶意或滥用权利的；
                    </li>
                        <li>
                          6. 出于维护您或其他个人的生命、财产等重大合法权益但又很难得到您本人授权同意的；
                    </li>
                        <li>
                          7. 响应您的请求将导致您或其他个人、组织的合法权益受到严重损害的；
                    </li>
                        <li>
                          8. 涉及商业秘密的。
                    </li>
                      </ul>
                    </div>
                  </div>
                  <div id="section7">
                    <strong><span>有关儿童的特别说明  </span></strong>
                  </div>
                  <div>
                    我们的服务不适用于儿童。我们不会刻意收集儿童的信息。如果我们得知我们无意中收集了儿童的信息，我们将尽快删除该信息。如果您认为我们可能有儿童的任何信息，请按照“联系我们”部分中所述的方式联系我们。
        </div>
                  <div id="section8">
                    <strong><span>对本隐私政策的更改 </span></strong>
                  </div>
                  <div>
                    为给您提供更好的服务以及随着我们业务的发展，本隐私政策也会随之更新。但未经您明确同意，我们不会削减您依据本隐私政策所应享有的权利。我们会通过公告或以其他适当方式提醒您相关内容的更新，也请您访问本页面以便及时了解最新的隐私政策。
        </div>
                  <div>
                    对于重大变更，我们还会提供更为显著的通知（例如我们会通过包括短信或在我们的服务页面做提示等方式）。本隐私政策所指的重大变更包括：
            <div>
                      <ul>
                        <li>
                          1. 我们的服务模式发生重大变化，如处理个人信息的目的、处理的个人信息类型、个人信息的使用方式等；
                    </li>
                        <li>
                          2. 我们在所有权结构、组织架构等方面发生重大变化，如业务调整、破产并购等引起的所有者变更等；
                    </li>
                        <li>
                          3. 个人信息共享、转让或公开披露的主要对象发生变化；
                    </li>
                        <li>
                          4. 您参与个人信息处理方面的权利及其行使方式发生重大变化；
                    </li>
                        <li>
                          5. 我们负责处理个人信息安全的责任部门、联络方式及投诉渠道发生变化时；
                    </li>
                        <li>
                          6. 个人信息安全影响评估报告表明存在高风险时。
                    </li>
                      </ul>
                    </div>
                  </div>
                  <div id="section9">
                    <strong>联系我们 </strong>
                  </div>
                  <div>
                    如果您对我们的隐私做法或本隐私政策有任何疑问或投诉，请通过以下电子邮箱或邮寄地址与我们联系。一般情况下，我们将在15个工作日内受理并处理您关于个人信息的请求。如果您对我们的回复不满意，并且认为我们的个人信息处理行为损害了您的合法权益，您可以向监管部门进行投诉或举报，或向J.D. Power中国所在地有管辖权的人民法院提起诉讼。
        </div>
                  <div>
                    <strong>电子邮箱：  </strong>
                  </div>
                  <div>
                    <a href="mailto:jdpowerprivacy@jdpa.com">jdpowerprivacy@jdpa.com</a>
                  </div>
                  <div>
                    <div><strong>邮寄地址： </strong>  </div><br />
                    <div>
                      J.D. Power中国 法务部 <br />
                上海市南京西路1515号上海嘉里中心1601室<br />
                邮编：200040<br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </>}
    </>
  );
}
const mapStateToProps = ({ global: { bottomBar: { show, curr }, showLoginModal, userInfo, isNeedLogin, policy } }) => {
  return {
    show,
    curr,
    showLoginModal,
    userInfo,
    isNeedLogin,
    policy
  };
};
export default connect(mapStateToProps)(Index);

import PropTypes from 'prop-types';
import PriceCard from './PriceCard';
import PricesContainer from './styles';

export default function Prices({ isTabletAndMobile, isMobile }) {
  return (
    <PricesContainer id="prices" data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="150"
        data-aos-offset="0" >

      <div className="prices_section">
        <h4 className={`${isMobile ? 'text-2xl' : 'text-3xl'} prices-main-title`}>
          Planos e preços:
        </h4>

        <div className="main_container">

          {
          isTabletAndMobile
            ? (
              <>
                <PriceCard
                  isPremium
                  isMobile={isMobile}
                  isTabletAndMobile={isTabletAndMobile}
                  title="iClub Pro"
                  subTitle="(anual)"
                  span="A partir de"
                  price="R$ 200,00/mês"
                  link="https://api.whatsapp.com/send/?phone=5531996793158"
                  list={[
                    'Aulas mentoradas ao vivo diretamente com Isabella Cayuela a partir de R$200',
                    'Acesso as aulas AO VIVO 2x por semana',
                    'Acesso a plataforma com aulas gravadas',
                    'Temas novos todos os meses',
                    'Aulas de Hatha e Vinyasa',
                    'Aulas práticas e teóricas',
                    'Aulas didáticas para avançar e   lapidar sua prática',
                    'Acesso a bônus exclusivos da comunidade',
                    'Pagamento recorrente, 12x de R$180 (não compromete o limite do cartão)',
                  ]}
                />

                <PriceCard
                  isPremium={false}
                  isMobile={isMobile}
                  isTabletAndMobile={isTabletAndMobile}
                  title="iClub"
                  subTitle="anual"
                  price="R$ 49,90/mês"
                  link="https://pay.hotmart.com/J71174272X?off=sghdkt84"
                  list={[
                    'Acesso a plataforma com aulas gravadas',
                    'Temas novos todos os meses',
                    'Aulas de Hatha e Vinyasa',
                    'Aulas práticas e teóricas',
                    'Aulas didáticas para avançar e lapidar sua prática',
                    'Acesso a bônus exclusivos da comunidade',
                    'Acesso a bônus exclusivos da comunidade',
                    'Pagamento parcelado, até 12x de R$39,90',
                  ]}
                />

                <PriceCard
                  isPremium={false}
                  isMobile={isMobile}
                  isTabletAndMobile={isTabletAndMobile}
                  title="iClub"
                  subTitle="mensal"
                  price="R$ 69,90/mês"
                  link="https://pay.hotmart.com/J71174272X?off=4o7gr397"
                  list={[
                    'Acesso a plataforma com aulas gravadas',
                    'Temas novos todos os meses',
                    'Aulas de Hatha e Vinyasa',
                    'Aulas práticas e teóricas',
                    'Aulas didáticas para avançar e lapidar sua prática',
                    'Acesso a bônus exclusivos da comunidade',
                    'Pagamento mensal',
                  ]}
                />
              </>
            ) : (
              <>
                <PriceCard
                  isPremium={false}
                  isMobile={isMobile}
                  isTabletAndMobile={isTabletAndMobile}
                  title="iClub"
                  subTitle="anual"
                  price="R$ 49,90/mês"
                  link="https://pay.hotmart.com/J71174272X?off=sghdkt84"
                  list={[
                    'Acesso a plataforma com aulas gravadas',
                    'Temas novos todos os meses',
                    'Aulas de Hatha e Vinyasa',
                    'Aulas práticas e teóricas',
                    'Aulas didáticas para avançar e lapidar sua prática',
                    'Acesso a bônus exclusivos da comunidade',
                    'Acesso a bônus exclusivos da comunidade',
                    'Pagamento parcelado, até 12x de R$39,90',
                  ]}
                />

                <PriceCard
                  isPremium
                  isMobile={isMobile}
                  isTabletAndMobile={isTabletAndMobile}
                  title="iClub Pro"
                  subTitle="(anual)"
                  price="R$ 200,00/mês"
                  span="A partir de"
                  link="https://api.whatsapp.com/send/?phone=5531996793158"
                  list={[
                    'Aulas mentoradas ao vivo diretamente com Isabella Cayuela a partir de R$200',
                    'Acesso as aulas AO VIVO 2x por semana',
                    'Acesso a plataforma com aulas gravadas',
                    'Temas novos todos os meses',
                    'Aulas de Hatha e Vinyasa',
                    'Aulas práticas e teóricas',
                    'Aulas didáticas para avançar e   lapidar sua prática',
                    'Acesso a bônus exclusivos da comunidade',
                    'Pagamento recorrente, 12x de R$180 (não compromete o limite do cartão)',
                  ]}
                />

                <PriceCard
                  isPremium={false}
                  isMobile={isMobile}
                  isTabletAndMobile={isTabletAndMobile}
                  title="iClub"
                  subTitle="mensal"
                  price="R$ 89,90/mês"
                  link="https://pay.hotmart.com/J71174272X?off=4o7gr397"
                  list={[
                    'Acesso a plataforma com aulas gravadas',
                    'Temas novos todos os meses',
                    'Aulas de Hatha e Vinyasa',
                    'Aulas práticas e teóricas',
                    'Aulas didáticas para avançar e lapidar sua prática',
                    'Acesso a bônus exclusivos da comunidade',
                    'Pagamento mensal',
                  ]}
                />
              </>
            )
          }
        </div>
      </div>
    </PricesContainer>
  );
}

Prices.propTypes = {
  isTabletAndMobile: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

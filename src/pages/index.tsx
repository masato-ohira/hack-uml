import { MyBox } from '@/components/MyBox'
import MyButton from '@/components/MyButton'
import { MyContainer } from '@/components/MyContainer'
import { MyGrid } from '@/components/MyGrid'
import MyStack from '@/components/MyStack'
import { useImages } from '@/recoil/images'

const Index = () => {
  const { images } = useImages()
  return (
    <MyContainer>
      <MyGrid>
        {images.map((i, key) => {
          return (
            <MyBox key={key}>
              <img src={i.img} alt={''} />
              <div className='text-right mt-3'>
                <MyStack direction={'row'} spacing={5}>
                  <MyButton variant={'primary'}>OK</MyButton>
                  <MyButton variant={'primary'}>OK</MyButton>
                  <MyButton variant={'primary'}>OK</MyButton>
                  <MyButton variant={'primary'}>OK</MyButton>
                </MyStack>
              </div>
            </MyBox>
          )
        })}
      </MyGrid>
    </MyContainer>
  )
}

export default Index

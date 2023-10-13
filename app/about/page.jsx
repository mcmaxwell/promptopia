'use client'

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

const About = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const promptId = searchParams.get('id')

    return <>about</>
}

export default About
